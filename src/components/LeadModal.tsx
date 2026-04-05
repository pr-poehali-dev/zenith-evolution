import { useState, useEffect, useRef } from "react"
import Icon from "@/components/ui/icon"

const SUBMIT_URL = "https://functions.poehali.dev/79f63abd-0319-4f5d-9c65-d56037b228ce"

interface LeadModalProps {
  open: boolean
  onClose: () => void
}

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setTimeout(() => {
        setStatus("idle")
        setImage(null)
        setImagePreview(null)
      }, 300)
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImage(file)
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setImage(null)
    setImagePreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      let imageBase64: string | null = null
      let imageName: string | null = null

      if (image) {
        const reader = new FileReader()
        imageBase64 = await new Promise((resolve) => {
          reader.onload = (ev) => resolve((ev.target?.result as string).split(",")[1])
          reader.readAsDataURL(image)
        })
        imageName = image.name
      }

      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, image_base64: imageBase64, image_name: imageName }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setImage(null)
        setImagePreview(null)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative bg-card border border-border rounded-3xl p-8 w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute top-4 left-4 text-foreground opacity-30 text-3xl font-extralight leading-none">+</div>
        <div className="absolute top-4 right-4 text-foreground opacity-30 text-3xl font-extralight leading-none">+</div>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <Icon name="X" size={20} />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Icon name="CheckCircle" size={32} className="text-primary" />
            </div>
            <h3 className="text-foreground font-semibold text-xl" style={{ fontFamily: "var(--font-montserrat)" }}>
              Заявка принята!
            </h3>
            <p className="text-muted-foreground font-mono text-sm">Мы скоро свяжемся с вами и дадим ранний доступ.</p>
            <button
              onClick={onClose}
              className="mt-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-mono text-sm hover:scale-105 transition-all duration-300"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-accent font-mono text-xs mb-1">Magic3D</p>
              <h3
                className="text-foreground text-2xl font-semibold"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Ранний доступ
              </h3>
              <p className="text-muted-foreground font-mono text-sm mt-2">
                Оставь заявку — мы свяжемся и дадим доступ к платформе.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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

              <div className="flex flex-col gap-2">
                <p className="text-muted-foreground font-mono text-xs">Загрузите изображение для генерации (необязательно)</p>
                {imagePreview ? (
                  <div className="relative rounded-xl overflow-hidden border border-border">
                    <img src={imagePreview} alt="preview" className="w-full h-40 object-cover" />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition-colors"
                    >
                      <Icon name="X" size={14} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-3 bg-background border border-dashed border-border rounded-xl px-4 py-4 text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors w-full"
                  >
                    <Icon name="ImagePlus" size={18} />
                    <span>Прикрепить фото объекта</span>
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 font-mono text-xs">Что-то пошло не так. Попробуйте ещё раз.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 mt-1"
              >
                {status === "loading" ? "Отправляем..." : "Получить доступ"}
                {status !== "loading" && <Icon name="ArrowUpRight" size={18} />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
