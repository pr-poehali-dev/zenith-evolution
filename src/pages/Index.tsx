import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
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
                <span className="text-foreground font-mono text-sm text-center">Получите готовую модель за 40 минут</span>
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
      </div>
      <Footer />
    </div>
  )
}

export default Index