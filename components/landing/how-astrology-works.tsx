'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const astrologyItems = [
  {
    question: 'Что такое астрология?',
    answer:
      'Астрология изучает положение планет и их влияние на личность, характер, отношения и жизненные события человека.',
  },
  {
    question: 'Что такое натальная карта?',
    answer:
      'Это карта неба в момент твоего рождения — ключ к пониманию твоих сильных сторон, характера, судьбы, способностей и потенциальных жизненных сценариев.',
  },
  {
    question: 'Знаки зодиака',
    answer: `Каждый знак отражает определённые черты характера и тип энергии. Типы энергии знаков зодиака делятся по четырём стихиям:

Огонь (Овен ♈, Лев ♌, Стрелец ♐)
даёт импульс, страсть, энтузиазм и активность.

Земля (Телец ♉, Дева ♍, Козерог ♑)
обеспечивает практичность, стабильность, надёжность и опору.

Воздух (Близнецы ♊, Весы ♎, Водолей ♒)
наделяет интеллектом, лёгкостью, общительностью и креативностью.

Вода (Рак ♋, Скорпион ♏, Рыбы ♓)
даёт интуицию, глубокую эмоциональность и эмпатию.`,
  },
  {
    question: 'Планеты и их символическое значение',
    answer: `Каждая планета в натальной карте символически связана с определёнными аспектами личности, энергии и жизненного опыта.

Солнце ☉: Твоё основное «я», идентичность, жизненная энергия и цель.
Луна ☽: Эмоции, интуиция, внутренний мир, чувства и реакции.
Меркурий ☿: Коммуникация, мышление, обучение, речь и обмен информацией.
Венера ♀: Любовь, отношения, красота, удовольствия и ценности.
Марс ♂: Энергия, действия, страсть, инициатива и сексуальность.
Юпитер ♃: Рост, удача, оптимизм, расширение, вера и возможности.
Сатурн ♄: Дисциплина, ответственность, ограничения, уроки и структура.
Уран ♅: Инновации, свобода, внезапные изменения, оригинальность и независимость.
Нептун ♆: Интуиция, мечты, вдохновение, иллюзии, духовность и эмпатия.
Плутон ♇: Трансформация, власть, глубинные изменения, возрождение и скрытые силы.`,
  },
  {
    question: 'Что такое Лунный календарь?',
    answer:
      'Психологический ритм ваших эмоций. Почему сегодня вы полны сил, а завтра — нуждаетесь в тишине.',
  },
  {
    question: 'Асцендент',
    answer:
      'Асцендент показывает, какое впечатление человек производит на окружающих.',
  },
  {
    question: 'Дома',
    answer:
      'Дома натальной карты показывают сферы жизни — отношения, карьеру, семью, финансы.',
  },
  {
    question: 'Аспекты',
    answer: `Аспекты — это углы между планетами.
Они показывают взаимодействие различных сторон личности.`,
  },
  {
    question: 'Что такое ретроградный Меркурий?',
    answer:
      'Период, когда планета движется в обратном направлении относительно Земли. В это время могут возникать сложности в коммуникации и планировании. Используй его для переосмысления событий и планирования дальнейших дел.',
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
        height="400"
        viewBox="0 0 40 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`opacity-40 ${isLeft ? '' : 'scale-x-[-1]'}`}
      >
        {/* Main vertical line */}
        <line x1="20" y1="0" x2="20" y2="400" stroke="#C9C4D4" strokeWidth="1" />
        
        {/* Vine curves and leaves */}
        <path 
          d="M20,40 Q35,50 30,70 Q25,85 20,80" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="32" cy="55" rx="6" ry="10" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(25, 32, 55)" />
        
        <path 
          d="M20,100 Q5,110 10,130 Q15,145 20,140" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="8" cy="115" rx="5" ry="9" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(-20, 8, 115)" />
        
        <path 
          d="M20,170 Q35,180 30,200 Q25,215 20,210" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="32" cy="185" rx="6" ry="10" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(20, 32, 185)" />
        
        <path 
          d="M20,240 Q5,250 10,270 Q15,285 20,280" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="8" cy="255" rx="5" ry="9" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(-25, 8, 255)" />
        
        <path 
          d="M20,310 Q35,320 30,340 Q25,355 20,350" 
          stroke="#352D55" 
          strokeWidth="0.8" 
          fill="none"
          opacity="0.5"
        />
        <ellipse cx="32" cy="325" rx="6" ry="10" fill="none" stroke="#352D55" strokeWidth="0.6" opacity="0.4" transform="rotate(15, 32, 325)" />
        
        {/* Small dots/berries */}
        <circle cx="28" cy="75" r="2" fill="#352D55" opacity="0.3" />
        <circle cx="12" cy="135" r="1.5" fill="#352D55" opacity="0.3" />
        <circle cx="28" cy="205" r="2" fill="#352D55" opacity="0.3" />
        <circle cx="12" cy="275" r="1.5" fill="#352D55" opacity="0.3" />
        <circle cx="28" cy="345" r="2" fill="#352D55" opacity="0.3" />
      </svg>
    </div>
  )
}

export function HowAstrologyWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 bg-white relative overflow-hidden">
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
            Как работает астрология?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {astrologyItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#F5F3F8] border border-[#E3E0E9] rounded-xl px-6 data-[state=open]:border-[#9090FF]/30"
              >
                <AccordionTrigger className="text-[#352D55] font-medium hover:no-underline py-5 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#352D55]/70 leading-relaxed whitespace-pre-line pb-5">
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
