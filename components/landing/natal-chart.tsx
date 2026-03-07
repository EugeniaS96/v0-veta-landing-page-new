'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export function NatalChart() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthCity: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to the Telegram bot
    window.open('https://t.me/vetaapp_bot', '_blank')
  }

  return (
    <section id="natal-chart" className="py-24 sm:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#352D55]">
            Натальная карта
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[#352D55]/80 leading-relaxed text-lg">
              Натальная карта — это персонализированный профиль твоей личности, основанный на дате, времени и месте рождения. В отличие от общих гороскопов по Солнцу, мы учитываем все планеты и аспекты, чтобы дать полную картину твоих черт, потенциала и путей развития. Узнай скрытые мотивы и как использовать их для гармонии в жизни.
            </p>

            <div className="pt-4">
              <p className="text-[#352D55] font-medium mb-4">Она показывает:</p>
              <ul className="space-y-3">
                {['черты характера', 'сильные стороны', 'внутренние противоречия', 'жизненные циклы'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-[#352D55]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9090FF]" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#F5F3F8] rounded-2xl p-8 border border-[#E3E0E9]"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#352D55] mb-2"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E3E0E9] rounded-lg text-[#352D55] placeholder:text-[#9D9D9D] focus:outline-none focus:border-[#9090FF] focus:ring-1 focus:ring-[#9090FF] transition-colors"
                    placeholder="Введите имя"
                  />
                </div>

                <div>
                  <label
                    htmlFor="birthDate"
                    className="block text-sm font-medium text-[#352D55] mb-2"
                  >
                    Дата рождения
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E3E0E9] rounded-lg text-[#352D55] focus:outline-none focus:border-[#9090FF] focus:ring-1 focus:ring-[#9090FF] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="birthTime"
                    className="block text-sm font-medium text-[#352D55] mb-2"
                  >
                    Время рождения
                  </label>
                  <input
                    type="time"
                    id="birthTime"
                    value={formData.birthTime}
                    onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E3E0E9] rounded-lg text-[#352D55] focus:outline-none focus:border-[#9090FF] focus:ring-1 focus:ring-[#9090FF] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="birthCity"
                    className="block text-sm font-medium text-[#352D55] mb-2"
                  >
                    Город рождения
                  </label>
                  <input
                    type="text"
                    id="birthCity"
                    value={formData.birthCity}
                    onChange={(e) => setFormData({ ...formData, birthCity: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E3E0E9] rounded-lg text-[#352D55] placeholder:text-[#9D9D9D] focus:outline-none focus:border-[#9090FF] focus:ring-1 focus:ring-[#9090FF] transition-colors"
                    placeholder="Введите город"
                  />
                </div>

                <Link
                  href="https://t.me/vetaapp_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#352D55] text-white rounded-full font-medium hover:bg-[#352D55]/90 transition-colors text-center block"
                >
                  Показать мою натальную карту
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
