import AppKit
import Foundation
import Carbon

// 粘贴服务：负责将 ClipItem 写入系统粘贴板并触发 Command+V
public final class PasteService: PasteServiceProtocol {
    private var stack: [ClipItem] = []
    private var stackActive = false
    private var asc = true
    public init() {}
    public func paste(_ item: ClipItem, plainText: Bool) {
        // 单次粘贴（可选择纯文本）
        writeToPasteboard(item, plainText: plainText)
    }
    public func directPaste(_ item: ClipItem) {
        writeToPasteboard(item, plainText: false)
        triggerPasteCommand()
    }
    
    public func triggerPasteCommand() {
        // Delay to allow previous app to activate (panel hide animation is ~0.15s)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            let source = CGEventSource(stateID: .hidSystemState)
            let vKeyCode: CGKeyCode = 0x09 // kVK_ANSI_V
            
            let keyDown = CGEvent(keyboardEventSource: source, virtualKey: vKeyCode, keyDown: true)
            let keyUp = CGEvent(keyboardEventSource: source, virtualKey: vKeyCode, keyDown: false)
            
            keyDown?.flags = .maskCommand
            keyUp?.flags = .maskCommand
            
            keyDown?.post(tap: .cghidEventTap)
            keyUp?.post(tap: .cghidEventTap)
        }
    }
    public func checkAccessibilityPermission() -> Bool {
        return AXIsProcessTrusted()
    }
    public func requestAccessibilityPermission() {
        let options = [kAXTrustedCheckOptionPrompt.takeUnretainedValue() as String: true]
        AXIsProcessTrustedWithOptions(options as CFDictionary)
    }
    // 开启栈式粘贴，asc 控制顺序（正序/倒序）
    public func activateStack(directionAsc: Bool) { stackActive = true; asc = directionAsc }
    public func deactivateStack() { stackActive = false; stack.removeAll() }
    public func pushToStack(_ item: ClipItem) { if stackActive { stack.append(item) } }
    public func deliverStack() {
        // 依序将栈中的条目写入并模拟粘贴快捷键
        let seq = asc ? stack : stack.reversed()
        for i in seq {
            writeToPasteboard(i, plainText: false)
        }
        stack.removeAll()
    }
    private func writeToPasteboard(_ item: ClipItem, plainText: Bool) {
        let pb = NSPasteboard.general
        pb.clearContents()
        if plainText {
            if item.type == .text {
                if item.metadata["rich"] == "rtf" {
                    if item.metadata["plainSource"] == "pb" {
                        pb.setString(item.text ?? "", forType: .string)
                    } else if let u = item.contentRef, let s = try? NSAttributedString(url: u, options: [:], documentAttributes: nil) {
                        pb.setString(s.string, forType: .string)
                    } else {
                        pb.setString(item.text ?? "", forType: .string)
                    }
                } else if item.metadata["rich"] == "html" {
                    if let u = item.contentRef, let d = try? Data(contentsOf: u), let a = try? NSAttributedString(data: d, options: [.documentType: NSAttributedString.DocumentType.html], documentAttributes: nil) {
                        pb.setString(a.string, forType: .string)
                    } else {
                        pb.setString(item.text ?? "", forType: .string)
                    }
                } else if let u = item.contentRef, let s = try? String(contentsOf: u) {
                    pb.setString(s, forType: .string)
                } else {
                    pb.setString(item.text ?? "", forType: .string)
                }
            } else {
                let t = item.metadata["colorHex"] ?? item.text ?? ""
                pb.setString(t, forType: .string)
            }
            return
        }
        switch item.type {
        case .text:
            if let u = item.contentRef, item.metadata["rich"] == "rtf" {
                if let d = try? Data(contentsOf: u) { 
                    pb.setData(d, forType: .rtf)
                    if let a = try? NSAttributedString(url: u, options: [:], documentAttributes: nil) { pb.setString(a.string, forType: .string) } else { pb.setString(item.text ?? "", forType: .string) }
                } else if let a = try? NSAttributedString(url: u, options: [:], documentAttributes: nil) { pb.setString(a.string, forType: .string) }
                else { pb.setString(item.text ?? "", forType: .string) }
            } else if let u = item.contentRef, item.metadata["rich"] == "html" {
                if let d = try? Data(contentsOf: u) {
                    pb.setData(d, forType: .html)
                    if item.metadata["plainSource"] == "pb", let t = item.text { 
                        pb.setString(t, forType: .string)
                    } else if let a = try? NSAttributedString(data: d, options: [.documentType: NSAttributedString.DocumentType.html], documentAttributes: nil) {
                        pb.setString(a.string, forType: .string)
                        let range = NSRange(location: 0, length: a.length)
                        if let r = a.rtf(from: range, documentAttributes: [:]) { pb.setData(r, forType: .rtf) }
                    } else { 
                        pb.setString(item.text ?? "", forType: .string)
                    }
                } else {
                    pb.setString(item.text ?? "", forType: .string)
                }
            } else if let u = item.contentRef, let s = try? String(contentsOf: u) {
                pb.setString(s, forType: .string)
            } else {
                pb.setString(item.text ?? "", forType: .string)
            }
        case .link:
            if let u = item.contentRef { pb.setString(u.absoluteString, forType: .URL) }
        case .image:
            if let u = item.contentRef, let d = try? Data(contentsOf: u) { pb.setData(d, forType: .png) }
        case .file:
            if let u = item.contentRef { pb.setString(u.absoluteString, forType: .fileURL) }
        case .color:
            let t = item.metadata["colorHex"] ?? item.text ?? ""
            pb.setString(t, forType: .string)
        }
    }
}
