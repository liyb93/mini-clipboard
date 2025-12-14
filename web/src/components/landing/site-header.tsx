"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Languages } from "lucide-react"
import { useLanguage } from "@/i18n/context"

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold inline-block">{t.common.appName}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t.common.features}
            </Link>
            <Link href="https://github.com/PGshen/mini-clipboard/releases" target="_blank" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t.common.download}
            </Link>
            <Link href="#faq" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t.common.faq}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9"
              onClick={toggleLanguage}
              title={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
            >
              <Languages className="h-4 w-4" />
              <span className="sr-only">Toggle Language</span>
            </Button>
            <Link
              href="https://github.com/PGshen/mini-clipboard"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-accent hover:text-accent-foreground">
                <Github className="h-4 w-4" />
                <span className="sr-only">{t.common.github}</span>
              </div>
            </Link>
            <Button size="sm" className="h-8" asChild>
              <Link href="https://github.com/PGshen/mini-clipboard/releases" target="_blank">
                {t.common.downloadNow}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
