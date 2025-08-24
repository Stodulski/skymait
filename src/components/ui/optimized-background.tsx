"use client"

import { memo, useEffect, useState } from "react"

export const OptimizedBackground = memo(function OptimizedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) {
    return <div className="fixed inset-0 bg-[#0F0F0F]" />
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1a0a1a] to-[#0a1a1a]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#FF007F]/20 via-[#FF007F]/10 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[#00E5FF]/20 via-[#00E5FF]/10 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-radial from-[#FFD600]/15 via-[#FFD600]/8 to-transparent rounded-full blur-2xl opacity-50"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 127, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
})
