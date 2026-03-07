'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const cards = [
  {
    title: 'Понять себя',
    description:
      'Раскрой свои сильные стороны, внутренние противоречия и скрытые таланты. Получи инсайты, которые упростят жизнь и помогут в саморазвитии.',
    iconSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-totASpaoHZlSf34IS5v5qKtBQVOBtA.png',
    iconAlt: 'Силуэт сложенных рук с сердцем',
  },
  {
    title: 'Понять других',
    description:
      'Добавь любого человека и узнай его характер, реакции и особенности поведения. Пойми, что движет твоими друзьями и близкими.',
    iconSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A8mvaI5YAsCMV4RJkWacMZCkiH5dAj.png',
    iconAlt: 'Силуэт рукопожатия',
  },
  {
    title: 'Гармония отношений',
    description:
      'Узнай, где в отношениях гармония, а где возможны конфликты. Получай рекомендации, как выстроить более крепкую связь.',
    iconSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eXC7d2tJROMLPMRfkrsHOQStk1PtMN.png',
    iconAlt: 'Силуэт рук держащихся вместе',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#352D55] text-balance">
            Три ключа к пониманию себя и окружающих
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#E3E0E9] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 relative">
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#352D55] text-center mb-4">
                {card.title}
              </h3>
              <p className="text-[#352D55]/70 text-center leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
