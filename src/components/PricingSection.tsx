import Icon from "@/components/ui/icon"

interface PricingCardProps {
  tier: string
  price: string
  generations: number
  features: string[]
  highlighted?: boolean
  onSelect: () => void
}

function PricingCard({ tier, price, generations, features, highlighted, onSelect }: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.02] ${
        highlighted
          ? "border-primary bg-primary/5 shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
          : "border-border bg-card hover:border-primary/40"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground font-mono text-xs px-4 py-1 rounded-full">
            Популярный
          </span>
        </div>
      )}

      <div className="mb-6">
        <p className="text-accent font-mono text-xs mb-2 uppercase tracking-widest">{tier}</p>
        <div className="flex items-end gap-1 mb-1">
          <span
            className="text-foreground text-4xl font-bold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {price}
          </span>
          <span className="text-muted-foreground font-mono text-sm mb-1">₽</span>
        </div>
        <p className="text-muted-foreground font-mono text-xs">единоразово</p>
      </div>

      <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl px-4 py-3 mb-6">
        <Icon name="Layers" size={18} className="text-primary" />
        <span className="text-foreground font-mono text-sm font-semibold">{generations} генераций</span>
      </div>

      <div className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-accent mt-0.5">*</span>
            <span className="text-foreground font-mono text-sm">{f}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-full font-mono font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 ${
          highlighted
            ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            : "bg-secondary text-foreground border border-border hover:border-primary"
        }`}
      >
        Выбрать тариф
        <Icon name="ArrowUpRight" size={16} />
      </button>
    </div>
  )
}

interface PricingSectionProps {
  onOpenModal: () => void
}

export default function PricingSection({ onOpenModal }: PricingSectionProps) {
  const plans = [
    {
      tier: "Базовый",
      price: "1 500",
      generations: 5,
      features: [
        "5 уникальных 3D-моделей",
        "Цветные текстуры",
        "Скачивание в форматах OBJ/GLB",
        "Поддержка по email",
      ],
      highlighted: false,
    },
    {
      tier: "Профессиональный",
      price: "6 500",
      generations: 15,
      features: [
        "15 уникальных 3D-моделей",
        "Цветные текстуры высокого качества",
        "Скачивание в форматах OBJ/GLB/FBX",
        "Приоритетная поддержка",
      ],
      highlighted: true,
    },
    {
      tier: "Бизнес",
      price: "10 000",
      generations: 25,
      features: [
        "25 уникальных 3D-моделей",
        "Текстуры максимального качества",
        "Все форматы экспорта",
        "Выделенная поддержка 24/7",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="mt-8 mx-4 md:mx-0 px-6 md:px-12 py-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">После пробного периода</p>
          <h2
            className="text-foreground text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Тарифы
          </h2>
        </div>
        <p className="text-muted-foreground font-mono text-sm">
          Пробный период: 1 день · 3 генерации бесплатно
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PricingCard key={plan.tier} {...plan} onSelect={onOpenModal} />
        ))}
      </div>
    </section>
  )
}
