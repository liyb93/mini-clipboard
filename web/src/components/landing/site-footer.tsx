"use client"
import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import { useLanguage } from "@/i18n/context"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-bold">{t.common.appName}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              {t.footer.desc1}
              <br />
              {t.footer.desc2}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">{t.common.twitter}</span>
              </Link>
              <Link href="https://github.com/PGshen/mini-clipboard" className="text-gray-500 hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">{t.common.github}</span>
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="#features" className="hover:underline">{t.footer.features}</Link></li>
              <li><Link href="https://github.com/PGshen/mini-clipboard/releases" className="hover:underline">{t.footer.changelog}</Link></li>
              <li><Link href="https://github.com/PGshen/mini-clipboard/releases" className="hover:underline">{t.footer.downloadMac}</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="#faq" className="hover:underline">{t.common.faq}</Link></li>
              <li><Link href="#" className="hover:underline">{t.footer.userGuide}</Link></li>
              <li><Link href="#" className="hover:underline">{t.footer.privacy}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
