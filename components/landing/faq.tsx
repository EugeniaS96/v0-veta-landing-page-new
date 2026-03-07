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

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
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
