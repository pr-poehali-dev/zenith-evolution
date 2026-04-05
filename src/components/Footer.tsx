import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"
const SUBMIT_URL = "https://functions.poehali.dev/79f63abd-0319-4f5d-9c65-d56037b228ce"

export default function Footer() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="w-full px-6 relative py-[0] mt-28 h-auto mb-0 bg-card">
      <div className="absolute top-8 right-6 text-accent text-2xl">+</div>
      <div className="absolute top-1/2 right-12 text-accent text-lg transform -translate-y-1/2">*</div>
      <div className="absolute bottom-12 right-20 text-accent text-xl">+</div>
      <div className="absolute top-16 right-32 text-accent text-sm">*</div>
      <div className="absolute bottom-8 right-8 text-accent text-lg">*</div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 max-w-lg mt-8">
            <h2
              className="text-foreground text-4xl md:text-5xl mb-8 leading-[3.5rem] md:leading-[4rem] font-semibold text-center md:text-left mt-0"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              3D из слов. Без границ.
            </h2>

            <div className="space-y-4 text-foreground">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm">Magic3D превращает текстовые описания в полноценные 3D-модели с цветной текстурой.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm">Создан для разработчиков игр, аниматоров и создателей спецэффектов в кино.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center relative">
            <div className="relative">
              <img
                src={`${CDN_BASE}/jack-footer-ufo-new.png`}
                alt="Magic3D"
                width={400}
                height={300}
                className="object-contain mb-0 mt-4"
              />
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-12">
          <div className="relative">
            <img
              src={`${CDN_BASE}/jack-footer-ufo-new.png`}
              alt="Magic3D"
              width={500}
              height={375}
              className="object-contain"
            />
          </div>
        </div>

        <div id="contact" className="w-full px-6 py-16 border-t border-border mt-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="flex flex-col gap-2 max-w-sm">
              <h2 className="text-foreground font-mono text-xl font-bold">Попробуй Magic3D!</h2>
              <p className="text-muted-foreground font-mono text-sm">Оставь заявку — мы свяжемся и дадим ранний доступ к платформе.</p>
            </div>

            {status === "success" ? (
              <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-2xl px-6 py-4 flex-1 max-w-md">
                <Icon name="CheckCircle" size={20} className="text-accent" />
                <p className="text-foreground font-mono text-sm">Заявка принята! Мы скоро свяжемся с вами.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-1 max-w-md w-full">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background border border-border rounded-xl px-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border border-border rounded-xl px-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                {status === "error" && (
                  <p className="text-red-400 font-mono text-xs">Что-то пошло не так. Попробуйте ещё раз.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "loading" ? "Отправляем..." : "Оставить заявку"}
                  {status !== "loading" && <Icon name="ArrowUpRight" size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="w-full px-6 py-4 border-t border-border flex md:flex-row items-center justify-between gap-2 flex-row">
          <p className="text-muted-foreground text-sm font-mono">2025 Magic3D</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm font-mono transition-colors">Конфиденциальность</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm font-mono transition-colors">Условия</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}