'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Constellation background component
function ConstellationBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-[0.12]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A961" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Constellation lines */}
        <g stroke="#C9A961" strokeWidth="0.5" fill="none" opacity="0.6">
          {/* Left constellation group */}
          <path d="M80,150 L150,200 L220,180 L280,220 L350,190" />
          <path d="M150,200 L180,280 L250,300" />
          <path d="M220,180 L260,120 L320,150" />
          <path d="M280,220 L320,280 L380,260" />
          
          {/* Center constellation group */}
          <path d="M450,100 L520,150 L600,120 L680,160 L750,130" />
          <path d="M520,150 L550,220 L620,250 L700,230" />
          <path d="M600,120 L630,180 L620,250" />
          <path d="M680,160 L720,220 L700,230 L780,280" />
          <path d="M550,220 L500,280 L540,340" />
          
          {/* Right constellation group */}
          <path d="M850,120 L920,170 L990,140 L1050,180 L1120,150" />
          <path d="M920,170 L950,240 L1020,260" />
          <path d="M990,140 L1030,200 L1020,260 L1080,300" />
          <path d="M1050,180 L1100,240 L1080,300" />
          
          {/* Lower connecting lines */}
          <path d="M350,190 L420,230 L450,100" />
          <path d="M750,130 L820,160 L850,120" />
          <path d="M380,260 L450,290 L500,280" />
          <path d="M780,280 L840,260 L920,300" />
        </g>

        {/* Star points with glow */}
        <g filter="url(#glow)">
          {/* Left group stars */}
          <circle cx="80" cy="150" r="3" fill="#C9A961" />
          <circle cx="150" cy="200" r="4" fill="#C9A961" />
          <circle cx="220" cy="180" r="3" fill="#C9A961" />
          <circle cx="280" cy="220" r="4" fill="#C9A961" />
          <circle cx="350" cy="190" r="3" fill="#C9A961" />
          <circle cx="180" cy="280" r="2.5" fill="#C9A961" />
          <circle cx="250" cy="300" r="3" fill="#C9A961" />
          <circle cx="260" cy="120" r="2.5" fill="#C9A961" />
          <circle cx="320" cy="150" r="3" fill="#C9A961" />
          <circle cx="320" cy="280" r="2.5" fill="#C9A961" />
          <circle cx="380" cy="260" r="3" fill="#C9A961" />
          
          {/* Center group stars */}
          <circle cx="450" cy="100" r="4" fill="#C9A961" />
          <circle cx="520" cy="150" r="5" fill="#C9A961" />
          <circle cx="600" cy="120" r="4" fill="#C9A961" />
          <circle cx="680" cy="160" r="5" fill="#C9A961" />
          <circle cx="750" cy="130" r="4" fill="#C9A961" />
          <circle cx="550" cy="220" r="3" fill="#C9A961" />
          <circle cx="620" cy="250" r="4" fill="#C9A961" />
          <circle cx="700" cy="230" r="3" fill="#C9A961" />
          <circle cx="630" cy="180" r="2.5" fill="#C9A961" />
          <circle cx="720" cy="220" r="3" fill="#C9A961" />
          <circle cx="780" cy="280" r="3" fill="#C9A961" />
          <circle cx="500" cy="280" r="3" fill="#C9A961" />
          <circle cx="540" cy="340" r="2.5" fill="#C9A961" />
          
          {/* Right group stars */}
          <circle cx="850" cy="120" r="4" fill="#C9A961" />
          <circle cx="920" cy="170" r="5" fill="#C9A961" />
          <circle cx="990" cy="140" r="4" fill="#C9A961" />
          <circle cx="1050" cy="180" r="4" fill="#C9A961" />
          <circle cx="1120" cy="150" r="3" fill="#C9A961" />
          <circle cx="950" cy="240" r="3" fill="#C9A961" />
          <circle cx="1020" cy="260" r="4" fill="#C9A961" />
          <circle cx="1030" cy="200" r="2.5" fill="#C9A961" />
          <circle cx="1100" cy="240" r="3" fill="#C9A961" />
          <circle cx="1080" cy="300" r="3" fill="#C9A961" />
          
          {/* Connecting stars */}
          <circle cx="420" cy="230" r="2.5" fill="#C9A961" />
          <circle cx="820" cy="160" r="2.5" fill="#C9A961" />
          <circle cx="450" cy="290" r="2.5" fill="#C9A961" />
          <circle cx="840" cy="260" r="2.5" fill="#C9A961" />
          <circle cx="920" cy="300" r="3" fill="#C9A961" />
          
          {/* Small scattered stars for atmosphere */}
          <circle cx="120" cy="100" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="400" cy="80" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="560" cy="60" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="700" cy="80" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="880" cy="60" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="1000" cy="80" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="200" cy="350" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="450" cy="380" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="650" cy="350" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="850" cy="380" r="1.5" fill="#C9A961" opacity="0.6" />
          <circle cx="1050" cy="350" r="1.5" fill="#C9A961" opacity="0.6" />
        </g>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-12"
    >
      {/* Constellation Background */}
      <ConstellationBackground />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#352D55] tracking-tight mb-6">
            VETA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#352D55] tracking-wide mb-8">
            ПОЗНАЙ СЕБЯ ГЛУБЖЕ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl text-[#352D55]/80 max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
            Помогаем раскрыть твои сильные стороны, понять других и строить гармоничные отношения через персонализированные инсайты.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#352D55] border-2 border-[#352D55] rounded-full font-medium hover:bg-[#352D55] hover:text-white transition-all duration-300 text-center"
          >
            Узнать больше
          </a>
          <Link
            href="https://t.me/vetaapp_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#352D55] text-white border-2 border-[#352D55] rounded-full font-medium hover:bg-[#352D55]/90 transition-all duration-300 text-center"
          >
            Перейти в Veta
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
