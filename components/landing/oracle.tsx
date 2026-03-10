'use client'

import { motion } from 'framer-motion'

const questions = [
  '«Как перестать сомневаться в себе?»',
  '«Как построить крепкие отношения?»',
  '«Как накопить на мечту?»',
  '«Как совмещать работу и семью?»',
  '«Как пережить расставание?»',
  '«Как поговорить с мужем о проблемах?»',
  'Как распознать абьюз в отношениях?',
  'Как справиться с тревогой и найти опору?',
]

const helpsList = [
  'разобраться в сложных ситуациях',
  'получить совет',
  'посмотреть на проблему со стороны',
  'найти новые решения',
]

export function Oracle() {
  return (
    <section id="oracle" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#352D55]">
            Оракул
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Question Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-[#E3E0E9] rounded-xl px-6 py-4 text-[#352D55]/80 italic hover:border-[#9090FF]/50 transition-colors"
              >
                {question}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 lg:sticky lg:top-32"
          >
            <p className="text-[#352D55]/80 leading-relaxed text-lg">
              Оракул Veta — это интеллектуальный помощник, с которым можно поговорить о том, что волнует.
            </p>

            <div>
              <p className="text-[#352D55] font-medium mb-4">Он помогает:</p>
              <ul className="space-y-3">
                {helpsList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#352D55]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9090FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#352D55]/80 leading-relaxed text-lg pt-4">
              Это безопасное пространство, где можно задать любой вопрос и получить поддержку. Анонимно. Без осуждения.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
