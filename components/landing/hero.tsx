'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16"
    >
      <div className="max-w-4xl mx-auto text-center">
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
