import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Privacy() {
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
          Политика конфиденциальности
        </h1>
        <p className="text-muted-foreground font-mono text-sm mb-12">Последнее обновление: 5 апреля 2026 г.</p>

        <div className="space-y-10 font-mono text-sm leading-relaxed">
          <section>
            <h2 className="text-accent text-base font-bold mb-3">1. Общие положения</h2>
            <p className="text-muted-foreground">
              Настоящая политика конфиденциальности описывает, как Magic3D собирает, использует и защищает
              персональные данные пользователей сервиса. Используя наш сайт, вы соглашаетесь с условиями
              данной политики.
            </p>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">2. Какие данные мы собираем</h2>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Имя и адрес электронной почты при заполнении формы заявки</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Технические данные: IP-адрес, тип браузера, страницы посещений</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Данные платёжных транзакций (обрабатываются через ЮKassa)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">3. Как мы используем данные</h2>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Для связи с вами по вопросам раннего доступа и поддержки</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Для обработки платежей и выдачи доступа к сервису</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Для улучшения работы сайта и анализа посещаемости</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-0.5">*</span>Для отправки важных уведомлений, связанных с вашим заказом</li>
            </ul>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">4. Хранение и защита данных</h2>
            <p className="text-muted-foreground">
              Ваши данные хранятся на защищённых серверах. Мы не передаём персональные данные третьим лицам,
              за исключением случаев, необходимых для обработки платежей (ЮKassa) или выполнения требований
              законодательства. Данные хранятся не дольше, чем это необходимо для предоставления услуги.
            </p>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">5. Файлы cookie</h2>
            <p className="text-muted-foreground">
              Сайт использует файлы cookie для аналитики (Яндекс.Метрика, Google Analytics). Вы можете
              отключить cookie в настройках браузера, однако это может повлиять на работу некоторых функций сайта.
            </p>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">6. Ваши права</h2>
            <p className="text-muted-foreground">
              Вы имеете право запросить доступ к своим данным, потребовать их исправления или удаления.
              Для этого свяжитесь с нами по электронной почте, указанной на сайте.
            </p>
          </section>

          <section>
            <h2 className="text-accent text-base font-bold mb-3">7. Изменения политики</h2>
            <p className="text-muted-foreground">
              Мы оставляем за собой право обновлять данную политику. Актуальная версия всегда доступна на этой странице.
              Продолжение использования сервиса после изменений означает ваше согласие с новой редакцией.
            </p>
          </section>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex items-center justify-between">
          <p className="text-muted-foreground font-mono text-sm">2025 Magic3D</p>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground font-mono text-sm transition-colors">
            Условия использования
          </Link>
        </div>
      </div>
    </div>
  )
}
