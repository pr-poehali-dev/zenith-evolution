import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm mb-12"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </Link>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Условия использования
        </h1>
        <p className="text-muted-foreground font-mono text-sm mb-12">Последнее обновление: 5 апреля 2026 г.</p>

        <div className="space-y-10 font-mono text-sm leading-relaxed">
          <section>
            <h2 className="text-accent text-base font-bold mb-3">1. Принятие условий</h2>
            <p className="text-muted-foreground">
              Используя сервис Magic3D, вы подтверждаете, что ознакомились с настоящими условиями и согласны
              их соблюдать. Если вы не согласны с какими-либо условиями, пожалуйста, прекратите использование сервиса.
            </p>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">2. Описание сервиса</h2>
            <p className="text-muted-foreground">
              Magic3D — это платформа для генерации 3D-моделей с текстурами на основе текстовых описаний с
              использованием технологий искусственного интеллекта. Сервис предоставляется на условиях "как есть",
              сроки генерации могут варьироваться.
            </p>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">3. Регистрация и доступ</h2>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Для получения доступа к сервису необходимо оставить заявку или оплатить тарифный план</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Вы обязуетесь предоставлять достоверные данные при регистрации</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Доступ предоставляется одному пользователю и не может быть передан третьим лицам</li>
            </ul>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">4. Оплата и возврат</h2>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Оплата производится через платёжный сервис ЮKassa</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Тарифы указаны на сайте и могут быть изменены с предварительным уведомлением</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Возврат средств возможен в течение 14 дней, если услуга не была оказана</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Для запроса возврата обратитесь в поддержку через форму на сайте</li>
            </ul>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">5. Права на контент</h2>
            <p className="text-muted-foreground">
              3D-модели, сгенерированные с помощью Magic3D, принадлежат вам. Вы можете использовать их в
              коммерческих и некоммерческих целях. Мы оставляем за собой право использовать обезличенные
              примеры работ в маркетинговых материалах с вашего согласия.
            </p>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">6. Запрещённое использование</h2>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Генерация контента, нарушающего законодательство или права третьих лиц</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Попытки взлома, обхода ограничений или несанкционированного доступа к системе</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Перепродажа доступа к сервису без письменного разрешения Magic3D</li>
            </ul>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">7. Ограничение ответственности</h2>
            <p className="text-muted-foreground">
              Magic3D не несёт ответственности за косвенные убытки, возникшие в результате использования
              или невозможности использования сервиса. Мы не гарантируем непрерывную работу платформы
              и оставляем за собой право на техническое обслуживание с временным ограничением доступа.
            </p>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">8. Изменения условий</h2>
            <p className="text-muted-foreground">
              Мы вправе изменять настоящие условия. Уведомление об изменениях будет размещено на сайте.
              Продолжение использования сервиса после публикации изменений означает ваше согласие с ними.
            </p>
          </section>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex items-center justify-between">
          <p className="text-muted-foreground font-mono text-sm">2025 Magic3D</p>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground font-mono text-sm transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </div>
  )
}
