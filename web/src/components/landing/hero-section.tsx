"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Layout, LayoutGrid, CheckSquare, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "@/i18n/context"

// Define content types
type FeatureId = "default" | "paste" | "list" | "grid" | "multi"

interface FeatureConfig {
  id: FeatureId
  src: string
  title: string
  desc: string
  icon: React.ReactNode
  colorClass: string
  bgClass: string
}

// Define positions and their configurations
type Position = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

const POSITIONS: Record<Position, { className: string, initialRotate: number }> = {
  topLeft: {
    className: "absolute -left-20 -top-12 w-56 hidden lg:block origin-bottom-right z-20",
    initialRotate: -6
  },
  topRight: {
    className: "absolute -right-20 -top-12 w-56 hidden lg:block origin-bottom-left z-20",
    initialRotate: 6
  },
  bottomLeft: {
    className: "absolute -left-20 -bottom-12 w-64 hidden lg:block origin-top-right z-20",
    initialRotate: 3
  },
  bottomRight: {
    className: "absolute -right-20 -bottom-12 w-64 hidden lg:block origin-top-left z-20",
    initialRotate: -3
  }
}

export function HeroSection() {
  const { t } = useLanguage()

  const FEATURES: Record<FeatureId, FeatureConfig> = {
    default: {
      id: "default",
      src: "/image/dark_mode2.jpg",
      title: t.hero.features.main.title,
      desc: t.hero.features.main.desc,
      icon: <Layout className="w-5 h-5" />,
      colorClass: "text-purple-500",
      bgClass: "bg-purple-500/10"
    },
    paste: {
      id: "paste",
      src: "/image/direct_paste.png",
      title: t.hero.features.paste.title,
      desc: t.hero.features.paste.desc,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
          <polyline points="13 2 13 9 20 9"></polyline>
        </svg>
      ),
      colorClass: "text-orange-500",
      bgClass: "bg-orange-500/10"
    },
    list: {
      id: "list",
      src: "/image/list_mode.png",
      title: t.hero.features.list.title,
      desc: t.hero.features.list.desc,
      icon: <List className="w-5 h-5" />,
      colorClass: "text-blue-500",
      bgClass: "bg-blue-500/10"
    },
    grid: {
      id: "grid",
      src: "/image/grid_mode.png",
      title: t.hero.features.grid.title,
      desc: t.hero.features.grid.desc,
      icon: <LayoutGrid className="w-5 h-5" />,
      colorClass: "text-green-500",
      bgClass: "bg-green-500/10"
    },
    multi: {
      id: "multi",
      src: "/image/multiselection.png",
      title: t.hero.features.multi.title,
      desc: t.hero.features.multi.desc,
      icon: <CheckSquare className="w-5 h-5" />,
      colorClass: "text-pink-500",
      bgClass: "bg-pink-500/10"
    }
  }

  const [layout, setLayout] = useState<{
    main: FeatureId
    topLeft: FeatureId
    topRight: FeatureId
    bottomLeft: FeatureId
    bottomRight: FeatureId
  }>({
    main: "default",
    topLeft: "grid",
    topRight: "list",
    bottomLeft: "paste",
    bottomRight: "multi"
  })

  const handleSwap = (slot: Position) => {
    const currentMain = layout.main
    const currentSlot = layout[slot]
    
    setLayout(prev => ({
      ...prev,
      main: currentSlot,
      [slot]: currentMain
    }))
  }

  const handleReset = () => {
    setLayout({
      main: "default",
      topLeft: "grid",
      topRight: "list",
      bottomLeft: "paste",
      bottomRight: "multi"
    })
  }

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 to-transparent blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
          >
            {t.hero.version}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-gray-100 dark:to-gray-400 pb-2"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto"
          >
            {t.hero.description1}
            <br className="hidden sm:inline" />
            {t.hero.description2}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row justify-center pt-4"
          >
            <Button size="lg" className="h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5" asChild>
              <Link href="https://github.com/PGshen/mini-clipboard/releases" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                {t.hero.freeDownload}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base shadow-sm hover:bg-muted transition-all" asChild>
              <Link href="https://github.com/PGshen/mini-clipboard" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                {t.common.github}
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* 3D Perspective Container */}
        <div className="mt-24 -mb-32 relative mx-auto max-w-4xl perspective-1000">
          <motion.div
            initial={{ opacity: 0, rotateX: 20, y: 100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            whileHover={{ scale: 1.02, rotateX: 2 }}
            className="relative transform-style-3d group"
          >
            {/* Main Display Area */}
            <div className="relative z-10 rounded-xl border bg-card/80 shadow-2xl backdrop-blur-md overflow-hidden p-2 ring-1 ring-white/20 transition-all duration-500 group-hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] dark:group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]">
              <div className="aspect-video relative rounded-lg overflow-hidden bg-background">
                <motion.div
                  layoutId={`image-${layout.main}`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={FEATURES[layout.main].src}
                    alt={FEATURES[layout.main].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Reset Trigger (Background Area) */}
              {layout.main !== "default" && (
                 <div 
                   className="absolute top-4 right-4 z-20 cursor-pointer bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border shadow-sm hover:bg-background transition-colors"
                   onClick={(e) => {
                     e.stopPropagation()
                     handleReset()
                   }}
                 >
                   Reset View
                 </div>
              )}
            </div>
            
            {/* Floating Cards */}
            {(Object.keys(POSITIONS) as Position[]).map((pos) => (
              <div 
                key={pos}
                className={`${POSITIONS[pos].className} rounded-xl border bg-card/90 backdrop-blur shadow-2xl p-4 transform transition-all duration-500 cursor-pointer hover:!scale-105 hover:!z-50 hover:!rotate-0`}
                style={{
                    transform: `rotate(${POSITIONS[pos].initialRotate}deg)`,
                }}
                onClick={() => handleSwap(pos)}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={layout[pos]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 mb-3"
                  >
                    <div className={`p-2 rounded-lg ${FEATURES[layout[pos]].bgClass} ${FEATURES[layout[pos]].colorClass}`}>
                      {FEATURES[layout[pos]].icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{FEATURES[layout[pos]].title}</h3>
                      <p className="text-xs text-muted-foreground">点击交换视图</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden ring-1 ring-border/50 bg-background">
                  <motion.div
                    layoutId={`image-${layout[pos]}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={FEATURES[layout[pos]].src} 
                      alt={FEATURES[layout[pos]].title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
