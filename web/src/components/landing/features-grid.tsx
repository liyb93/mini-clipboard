"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MultiTypeIcon, TimelineIcon, PinIcon, DirectPasteIcon, SearchIcon, KeyboardIcon, AppearanceIcon, BatchIcon, PrivacyIcon } from "./feature-icons"
import { useLanguage } from "@/i18n/context"

export function FeaturesGrid() {
  const { t } = useLanguage()

  const features = [
    {
      title: t.features.items.multiType.title,
      description: t.features.items.multiType.desc,
      icon: MultiTypeIcon,
    },
    {
      title: t.features.items.timeline.title,
      description: t.features.items.timeline.desc,
      icon: TimelineIcon,
    },
    {
      title: t.features.items.pinboards.title,
      description: t.features.items.pinboards.desc,
      icon: PinIcon,
    },
    {
      title: t.features.items.directPaste.title,
      description: t.features.items.directPaste.desc,
      icon: DirectPasteIcon,
    },
    {
      title: t.features.items.search.title,
      description: t.features.items.search.desc,
      icon: SearchIcon,
    },
    {
      title: t.features.items.keyboard.title,
      description: t.features.items.keyboard.desc,
      icon: KeyboardIcon,
    },
    {
      title: t.features.items.appearance.title,
      description: t.features.items.appearance.desc,
      icon: AppearanceIcon,
    },
    {
      title: t.features.items.batch.title,
      description: t.features.items.batch.desc,
      icon: BatchIcon,
    },
    {
      title: t.features.items.privacy.title,
      description: t.features.items.privacy.desc,
      icon: PrivacyIcon,
    },
  ]

  return (
    <section id="features" className="container mx-auto px-4 md:px-6 py-24 lg:py-32 space-y-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
          {t.features.tag}
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t.features.title}
        </h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {t.features.subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 border-border/50">
            <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-[0.08] group-hover:rotate-[-5deg] group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
              <feature.icon className="w-64 h-64 rotate-[-15deg]" />
            </div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 ring-1 ring-inset ring-primary/10">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
