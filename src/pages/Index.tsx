import { useState } from "react"
import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import LeadModal from "@/components/LeadModal"
import PricingSection from "@/components/PricingSection"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header onOpenModal={() => setModalOpen(true)} />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-40">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:gap-8 gap-4">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-background/50">
                <span className="text-accent font-mono text-3xl font-bold">01</span>
                <span className="text-foreground font-mono text-sm text-center">Введите текстовое описание объекта</span>
              </div>
              <div className="text-accent font-mono text-2xl hidden md:block">→</div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-background/50">
                <span className="text-accent font-mono text-3xl font-bold">02</span>
                <span className="text-foreground font-mono text-sm text-center">AI генерирует 3D-модель с текстурами</span>
              </div>
              <div className="text-accent font-mono text-2xl hidden md:block">→</div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-background/50">
                <span className="text-accent font-mono text-3xl font-bold">03</span>
                <span className="text-foreground font-mono text-sm text-center">Получите готовую модель за 3 минуты</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Платформа</span>
                <span className="text-foreground font-mono text-sm">Magic3D — AI-генерация 3D-моделей</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Пример</span>
                <span className="text-foreground font-mono text-sm">«Синяя ядовитая лягушка, сидящая на кувшинке»</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm">Аудитория</span>
                <span className="text-foreground font-mono text-sm">
                  Разработчики игр, аниматоры, создатели спецэффектов — все, кому нужны 3D-модели быстро и без сложного ПО.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8 mb-0 mx-4 md:mx-0 px-6 md:px-12 py-14">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-foreground text-3xl md:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Примеры генерации
            </h2>
            <span className="text-muted-foreground font-mono text-sm hidden md:block">text → 3D model</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/b2ec5216-1152-44ec-a817-0a9f4cf587b0/files/0a9d00ea-e3ab-4b8f-beea-f04c709894fe.jpg"
                  alt="Синяя ядовитая лягушка"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-accent font-mono text-xs mb-2">Промпт</p>
                <p className="text-foreground font-mono text-sm leading-relaxed">«Синяя ядовитая лягушка, сидящая на кувшинке»</p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="bg-primary/10 border border-primary/20 text-primary font-mono text-xs px-3 py-1 rounded-full">3 мин</span>
                  <span className="bg-border/50 text-muted-foreground font-mono text-xs px-3 py-1 rounded-full">с текстурой</span>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/b2ec5216-1152-44ec-a817-0a9f4cf587b0/files/6eed9c66-1e1e-4b34-b220-b4315776ca1f.jpg"
                  alt="Магический дракон"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-accent font-mono text-xs mb-2">Промпт</p>
                <p className="text-foreground font-mono text-sm leading-relaxed">«Светящийся магический кристальный дракон»</p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="bg-primary/10 border border-primary/20 text-primary font-mono text-xs px-3 py-1 rounded-full">3 мин</span>
                  <span className="bg-border/50 text-muted-foreground font-mono text-xs px-3 py-1 rounded-full">с текстурой</span>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/b2ec5216-1152-44ec-a817-0a9f4cf587b0/files/a872ab42-fcf0-4d2d-a2e5-75a1356972ee.jpg"
                  alt="Космический истребитель"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-accent font-mono text-xs mb-2">Промпт</p>
                <p className="text-foreground font-mono text-sm leading-relaxed">«Футуристический космический истребитель»</p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="bg-primary/10 border border-primary/20 text-primary font-mono text-xs px-3 py-1 rounded-full">3 мин</span>
                  <span className="bg-border/50 text-muted-foreground font-mono text-xs px-3 py-1 rounded-full">с текстурой</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PricingSection onOpenModal={() => setModalOpen(true)} />
      </div>

      <Footer />
    </div>
  )
}

export default Index