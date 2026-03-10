'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: '"Инсайты о себе — как терапия. Увидела сильные стороны и начала ценить себя."',
    author: 'Мария',
  },
  {
    text: 'Оракул дал совет по карьере, когда не знал, с чего начать."',
    author: 'Олег',
  },
  {
    text: '«Раздел совместимости помог нам с мужем понять, что наши ссоры — это просто разный способ восприятия событий. Стало гораздо спокойнее».',
    author: 'Александра',
  },
  {
    text: '«Раньше я думала, что астрология — это просто гороскопы в газетах. Veta открыла мне глаза на то, почему я так реагирую на критику. Это как сеанс психолога, только быстрее и дешевле"',
    author: 'Светлана',
  },
  {
    text: '«Оракул — это что-то невероятное. Когда тяжело на душе, захожу и просто пишу ему. Ответы всегда успокаивают и направляют. Как будто с мудрым другом говоришь»',
    author: 'Елена',
  },
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#352D55]">
            Отзывы
          </h2>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white border border-[#E3E0E9] rounded-full shadow-sm hover:shadow-md transition-shadow text-[#352D55]"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white border border-[#E3E0E9] rounded-full shadow-sm hover:shadow-md transition-shadow text-[#352D55]"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonials Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-16 pb-4 snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white border border-[#E3E0E9] rounded-2xl p-8 snap-start"
              >
                <p className="text-[#352D55]/80 leading-relaxed italic mb-6 min-h-[120px]">
                  {testimonial.text}
                </p>
                <p className="text-[#352D55] font-medium">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
