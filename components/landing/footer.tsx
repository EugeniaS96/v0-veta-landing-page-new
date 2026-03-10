'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#352D55] text-white py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-9 h-9 relative rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-10%20105913-4LcNmyARB75zG5g32QdyTdbw9LuoRr.png"
                alt="Veta Moon Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif text-2xl font-medium">VETA</span>
          </div>

          {/* Tagline */}
          <p className="text-white/80 text-lg max-w-md mx-auto leading-relaxed">
            Познай себя. Пойми других. Построй гармоничные отношения.
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href="https://t.me/vetaapp_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white hover:text-[#352D55] transition-all duration-300"
            >
              Открыть Veta
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed pt-6">
            Контент носит развлекательный и информационный характер и не заменяет профессиональные медицинские, юридические или финансовые рекомендации.
          </p>

          {/* Copyright */}
          <p className="text-white/40 text-sm pt-2">
            © 2026 Veta. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
