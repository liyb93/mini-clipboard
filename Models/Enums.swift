import Foundation

// 剪贴类型枚举
public enum ClipType: String, Codable, CaseIterable {
    case text
    case link
    case image
    case file
    case color
}

public enum HistoryLayoutStyle: String, Codable, CaseIterable {
    case horizontal
    case grid
    case vertical
}

public enum AppearanceMode: String, Codable, CaseIterable {
    case light
    case dark
    case system
}

public enum DefaultAction: String, Codable, CaseIterable {
    case copy
    case paste
}

// 搜索过滤条件：按类型与来源应用过滤
public struct SearchFilters: Codable, Equatable {
    public var types: [ClipType]
    public var sourceApps: [String]
    public init(types: [ClipType] = [], sourceApps: [String] = []) {
        self.types = types
        self.sourceApps = sourceApps
    }
}

public enum HistoryRetention: Int, Codable, CaseIterable {
    case month = 30
    case quarter = 90
    case year = 365
}

public enum HistoryMaxItems: Int, Codable, CaseIterable {
    case one = 100
    case two = 200
    case three = 300
    case five = 500
    case thousand = 1000
}
