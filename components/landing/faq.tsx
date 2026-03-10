'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'Это точный прогноз будущего?',
    answer: 'Нет. Это инструмент самопознания и анализа личности.',
  },
  {
    question: 'Что нужно для расчёта?',
    answer:
      'Дата, время и место рождения. Чем точнее время, тем точнее анализ. Если время неизвестно, выберите опцию «не знаю» — мы всё равно рассчитаем карту, но некоторые детали (например, асцендент) будут приблизительными.',
  },
  {
    question: 'Это бесплатно?',
    answer:
      'У нас есть бесплатные расклады и платные за внутреннюю валюту (веты). Вы можете получать веты за приглашение друзей и ежедневные бонусы.',
  },
  {
    question: 'Насколько это научно?',
    answer:
      'Мы используем древние системы знаний, прошедшие проверку временем. Однако мы не даём 100% предсказаний, а предлагаем психологический портрет для самопознания.',
  },
  {
    question: 'Можно ли сделать расклад на другого человека?',
    answer:
      'Да, вы можете ввести данные любого человека и получить его психологический портрет, чтобы лучше понимать его. Эта информация остаётся только у вас.',
  },
  {
    question: 'Можно ли проверить совместимость?',
    answer: 'Да. Приложение показывает зоны гармонии и возможные конфликты.',
  },
  {
    question: 'Как работает реферальная программа?',
    answer: 'Пригласи друга — и вы оба получите монеты.',
  },
  {
    question: 'Как работает Оракул?',
    answer:
      'Оракул — это AI-собеседник, который анализирует ваш вопрос и дает ответ, опираясь на базу знаний по психологии, астрологии, а также понимание жизненных сценариев и человеческих отношений.',
  },
  {
    question: 'Конфиденциальность данных?',
    answer:
      'Мы не передаём личные данные третьим лицам. Вся информация используется только для расчётов и улучшения сервиса.',
  },
]

// Decorative vine SVG component
function DecorativeVine({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left'
  
  return (
    <div 
      className={`absolute top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none ${
        isLeft ? 'left-0 xl:-left-8' : 'right-0 xl:-right-8'
      }`}
    >
      <svg
        width="40"
        height="350"
        viewBox="0 0 40 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`opacity-40 ${isLeft ? '' : 'scale-x-[-1]'}`}
      >
        {/* Main vertical line */}
        <line x1="20" y1="0" x2="20" y2="350" stroke="#C9C4D4" strokeWidth="1" />
        
        {/* Vine curves and leaves */}
        <path 
          d="M20,35 Q35,45 30,65 Q25,80 20,75" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="32" cy="50" rx="6" ry="10" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(20, 32, 50)" />
        
        <path 
          d="M20,105 Q5,115 10,135 Q15,150 20,145" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="8" cy="120" rx="5" ry="9" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(-15, 8, 120)" />
        
        <path 
          d="M20,175 Q35,185 30,205 Q25,220 20,215" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="32" cy="190" rx="6" ry="10" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(25, 32, 190)" />
        
        <path 
          d="M20,255 Q5,265 10,285 Q15,300 20,295" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="8" cy="270" rx="5" ry="9" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(-20, 8, 270)" />
        
        {/* Small dots/berries */}
        <circle cx="28" cy="70" r="2" fill="#352D55" opacity="0.3" />
        <circle cx="12" cy="140" r="1.5" fill="#352D55" opacity="0.3" />
        <circle cx="28" cy="210" r="2" fill="#352D55" opacity="0.3" />
        <circle cx="12" cy="290" r="1.5" fill="#352D55" opacity="0.3" />
      </svg>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Decorative side elements */}
      <DecorativeVine side="left" />
      <DecorativeVine side="right" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#352D55]">
            Частые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-[#E3E0E9] rounded-xl px-6 data-[state=open]:border-[#9090FF]/30"
              >
                <AccordionTrigger className="text-[#352D55] font-medium hover:no-underline py-5 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#352D55]/70 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
