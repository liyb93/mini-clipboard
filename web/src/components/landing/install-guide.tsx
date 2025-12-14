"use client"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/i18n/context"

export function InstallGuide() {
  const { t } = useLanguage()

  const parseText = (text: string) => {
    const parts = text.split(/`([^`]+)`/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <code key={index} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">{part}</code>;
      }
      return part;
    });
  };

  return (
    <section id="installation" className="container mx-auto px-4 md:px-6 py-24 lg:py-32">
       <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t.installation.title}
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        <ol className="list-decimal list-outside space-y-6 ml-5 text-lg text-gray-600 dark:text-gray-300">
          <li className="pl-2">
            <span>{parseText(t.installation.step1.pre)}</span>
            <Link 
              href="https://github.com/PGshen/mini-clipboard/releases" 
              target="_blank"
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              {t.installation.step1.link}
            </Link>
            <span>{parseText(t.installation.step1.post)}</span>
          </li>
          
          <li className="pl-2">
            {parseText(t.installation.step2)}
          </li>

          <li className="pl-2">
            <p className="mb-2">{parseText(t.installation.step3.title)}</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-base text-gray-500 dark:text-gray-400">
              {t.installation.step3.items.map((item, index) => (
                <li key={index}>
                   {parseText(item)}
                </li>
              ))}
            </ul>
          </li>

          <li className="pl-2">
             {parseText(t.installation.step4)}
          </li>
        </ol>

        <div className="mt-8 rounded-xl overflow-hidden border bg-muted/50 shadow-sm">
          <Image
            src="/image/install_setting.png"
            alt={t.installation.imageAlt}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
