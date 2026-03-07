import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { About } from '@/components/landing/about'
import { NatalChart } from '@/components/landing/natal-chart'
import { Oracle } from '@/components/landing/oracle'
import { HowAstrologyWorks } from '@/components/landing/how-astrology-works'
import { Testimonials } from '@/components/landing/testimonials'
import { FAQ } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3F8]">
      <Header />
      <Hero />
      <About />
      <NatalChart />
      <Oracle />
      <HowAstrologyWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
