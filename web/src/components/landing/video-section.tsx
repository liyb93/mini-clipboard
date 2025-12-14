"use client"
import { useLanguage } from "@/i18n/context"

export function VideoSection() {
  const { t } = useLanguage()

  return (
    <section className="w-full bg-muted/50 py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {t.video.title}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            {t.video.desc}
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border bg-background">
          <video 
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
            playsInline
            poster="/image/cover.png"
          >
            <source src="/video/demo2.mp4" type="video/mp4" />
            {t.video.unsupported}
          </video>
        </div>
      </div>
    </section>
  )
}
