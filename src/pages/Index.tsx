import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/42c8aca0-7728-4ba6-b649-482b7f61292a/files/4bebd0c8-44e3-443f-a8fb-9387919618eb.jpg';

const nav = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'Обо мне' },
  { id: 'team', label: 'Команда' },
  { id: 'shop', label: 'Магазин' },
  { id: 'projects', label: 'Проекты' },
  { id: 'blog', label: 'Блог' },
  { id: 'contacts', label: 'Контакты' },
];

const candyWeights = [
  { w: '100 г', price: '120 ₽' },
  { w: '250 г', price: '280 ₽' },
  { w: '500 г', price: '520 ₽' },
  { w: '1 кг', price: '980 ₽' },
];

const team = [
  { name: 'Артём Соколов', role: 'Арт-директор', phone: '+7 922 000-00-01', email: 'artem@studio.ru', color: 'var(--flame)' },
  { name: 'Мария Лебедева', role: 'Дизайнер', phone: '+7 922 000-00-02', email: 'maria@studio.ru', color: 'var(--electric)' },
  { name: 'Денис Орлов', role: 'Разработчик', phone: '+7 922 000-00-03', email: 'denis@studio.ru', color: 'var(--lime)' },
  { name: 'Ольга Зайцева', role: 'Менеджер проектов', phone: '+7 922 000-00-04', email: 'olga@studio.ru', color: 'var(--flame)' },
];

const projects = [
  { title: 'Brand Identity', tag: 'Дизайн', year: '2024', color: 'var(--flame)' },
  { title: 'Mobile App', tag: 'Продукт', year: '2024', color: 'var(--electric)' },
  { title: 'Web Platform', tag: 'Разработка', year: '2023', color: 'var(--lime)' },
  { title: 'Art Direction', tag: 'Креатив', year: '2023', color: 'var(--flame)' },
];

const posts = [
  { title: 'Как я подхожу к новым проектам', date: '12 июня 2024', read: '5 мин' },
  { title: 'Тренды дизайна, которые работают', date: '28 мая 2024', read: '7 мин' },
  { title: 'Дисциплина важнее вдохновения', date: '03 мая 2024', read: '4 мин' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-ink text-paper overflow-x-hidden">
      <div className="grain" />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="font-display font-700 text-xl tracking-tight">
            Р<span className="text-flame">.</span>А
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-display uppercase text-sm tracking-widest text-paper/70 hover:text-flame transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden text-paper" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-ink border-t border-white/10 px-5 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-display uppercase text-left text-base tracking-widest text-paper/80"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-28 pb-16 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-flame font-display uppercase tracking-[0.3em] text-xs mb-6">
              <span className="w-8 h-px bg-flame" /> Личный сайт
            </span>
            <h1 className="font-display font-700 uppercase leading-[0.9] text-[15vw] lg:text-[7rem]">
              Роман
              <br />
              <span className="outline-text">Амбарцумян</span>
            </h1>
            <p className="mt-6 max-w-md text-paper/70 text-lg leading-relaxed">
              Создаю проекты, которые запоминаются. Дизайн, разработка и идеи на стыке смысла и эстетики.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="bg-flame text-ink font-display uppercase tracking-widest text-sm px-7 py-4 hover:bg-paper transition-colors"
              >
                Смотреть проекты
              </button>
              <button
                onClick={() => scrollTo('contacts')}
                className="border border-paper/30 font-display uppercase tracking-widest text-sm px-7 py-4 hover:border-flame hover:text-flame transition-colors"
              >
                Связаться
              </button>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            <div className="absolute -inset-4 bg-electric/20 blur-3xl rounded-full" />
            <img
              src={HERO_IMG}
              alt="Роман Амбарцумян"
              className="relative w-full aspect-square object-cover grayscale-[20%] contrast-110"
            />
            <div className="absolute -bottom-4 -left-4 bg-lime text-ink px-5 py-3 font-display uppercase text-sm tracking-widest">
              Creative · Dev
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/10 py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {Array(2).fill(0).map((_, i) => (
            <span key={i} className="font-display uppercase text-2xl tracking-widest mx-6 text-paper/40">
              Дизайн <span className="text-flame">✦</span> Разработка <span className="text-electric">✦</span> Креатив <span className="text-lime">✦</span> Идеи <span className="text-flame">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-5 sm:px-8 max-w-7xl mx-auto py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="font-display font-700 uppercase text-5xl leading-none">
              Обо<br /><span className="text-flame">мне</span>
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <p className="text-2xl leading-relaxed text-paper/90">
              Я верю, что хорошая работа рождается на пересечении дисциплины и любопытства. Превращаю идеи в живые продукты — от первого наброска до запуска.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {[
                { n: '50+', l: 'Проектов' },
                { n: '8', l: 'Лет опыта' },
                { n: '∞', l: 'Идей' },
              ].map((s) => (
                <div key={s.l} className="border-t border-white/15 pt-4">
                  <div className="font-display font-700 text-5xl text-flame">{s.n}</div>
                  <div className="uppercase tracking-widest text-sm text-paper/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-5 sm:px-8 max-w-7xl mx-auto py-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl">Команда</h2>
          <span className="text-paper/50 font-display uppercase tracking-widest text-sm hidden sm:block">Сотрудники</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="group border border-white/10 p-7 hover:border-transparent transition-all relative overflow-hidden"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 transition-all group-hover:h-full group-hover:opacity-100 opacity-100 -z-0"
                style={{ backgroundColor: m.color, height: '4px' }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 flex items-center justify-center font-display font-700 text-2xl text-ink mb-6"
                  style={{ backgroundColor: m.color }}
                >
                  {m.name.charAt(0)}
                </div>
                <h3 className="font-display font-700 uppercase text-2xl leading-tight">{m.name}</h3>
                <p className="text-paper/50 uppercase tracking-widest text-xs mt-1 mb-6">{m.role}</p>
                <a
                  href={`tel:${m.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2 text-paper/70 hover:text-flame transition-colors text-sm"
                >
                  <Icon name="Phone" size={16} />
                  {m.phone}
                </a>
                <a
                  href={`mailto:${m.email}`}
                  className="flex items-center gap-2 text-paper/70 hover:text-flame transition-colors text-sm mt-2"
                >
                  <Icon name="Mail" size={16} />
                  {m.email}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-paper/40 text-sm flex items-center gap-2">
          <Icon name="ShieldCheck" size={16} className="text-lime" />
          Указаны рабочие контакты. Личные адреса не публикуются в целях безопасности.
        </p>
      </section>

      {/* SHOP */}
      <section id="shop" className="px-5 sm:px-8 max-w-7xl mx-auto py-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl">Магазин</h2>
          <span className="text-paper/50 font-display uppercase tracking-widest text-sm hidden sm:block">Товары</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">

          {/* COFFEE */}
          <div className="border border-white/10 p-8 flex flex-col gap-6 hover:border-flame/50 transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-flame font-display uppercase tracking-widest text-xs">Горячие напитки</span>
                <h3 className="font-display font-700 uppercase text-4xl mt-1">Кофе</h3>
              </div>
              <span className="text-5xl">☕</span>
            </div>
            <p className="text-paper/60 leading-relaxed">
              Свежеобжаренный кофе — насыщенный вкус и аромат. Приготовим так, как тебе нравится.
            </p>
            <div className="flex items-end justify-between mt-auto">
              <div>
                <div className="text-paper/40 text-sm uppercase tracking-widest">Цена</div>
                <div className="font-display font-700 text-4xl text-flame">650 ₽</div>
              </div>
              <button
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-flame text-ink font-display uppercase tracking-widest text-sm px-6 py-3 hover:bg-paper transition-colors"
              >
                Заказать
              </button>
            </div>
          </div>

          {/* CANDY */}
          <div className="border border-white/10 p-8 flex flex-col gap-6 hover:border-lime/50 transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-lime font-display uppercase tracking-widest text-xs">Сладкое</span>
                <h3 className="font-display font-700 uppercase text-4xl mt-1">Конфеты</h3>
              </div>
              <span className="text-5xl">🍬</span>
            </div>
            <p className="text-paper/60 leading-relaxed">
              Любые конфеты на развес — цена зависит от весовой категории. Выбирай сколько душе угодно.
            </p>
            <div className="mt-auto">
              <div className="text-paper/40 text-sm uppercase tracking-widest mb-3">Цена по весу</div>
              <div className="grid grid-cols-4 gap-2">
                {candyWeights.map((c) => (
                  <div key={c.w} className="border border-white/10 p-3 text-center hover:border-lime/60 transition-colors">
                    <div className="text-lime font-display font-700 text-lg">{c.price}</div>
                    <div className="text-paper/50 text-xs uppercase tracking-wider mt-1">{c.w}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 w-full border border-lime/40 text-lime font-display uppercase tracking-widest text-sm px-6 py-3 hover:bg-lime hover:text-ink transition-colors"
              >
                Узнать наличие
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-5 sm:px-8 max-w-7xl mx-auto py-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl">Проекты</h2>
          <span className="text-paper/50 font-display uppercase tracking-widest text-sm hidden sm:block">Избранное</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group relative border border-white/10 p-8 h-64 flex flex-col justify-between overflow-hidden hover:border-transparent transition-all cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: p.color }}
              />
              <div className="relative flex items-center justify-between">
                <span className="font-display uppercase tracking-widest text-sm text-paper/60 group-hover:text-ink/70">{p.tag}</span>
                <span className="font-display text-sm text-paper/40 group-hover:text-ink/60">{p.year}</span>
              </div>
              <div className="relative flex items-end justify-between">
                <h3 className="font-display font-700 uppercase text-3xl group-hover:text-ink">{p.title}</h3>
                <Icon name="ArrowUpRight" size={32} className="group-hover:text-ink" />
              </div>
              <span className="absolute top-6 right-8 font-display text-8xl text-white/5 group-hover:text-ink/10 transition-colors">0{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="px-5 sm:px-8 max-w-7xl mx-auto py-24">
        <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl mb-12">Блог</h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {posts.map((post) => (
            <div key={post.title} className="group flex items-center justify-between gap-6 py-8 cursor-pointer">
              <div className="flex items-baseline gap-6 flex-wrap">
                <span className="font-display text-sm text-flame uppercase tracking-widest w-32 shrink-0">{post.date}</span>
                <h3 className="font-display font-500 text-2xl sm:text-3xl group-hover:text-flame transition-colors">{post.title}</h3>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-paper/40 text-sm hidden sm:block">{post.read}</span>
                <Icon name="ArrowRight" size={24} className="group-hover:text-flame group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="px-5 sm:px-8 max-w-7xl mx-auto py-24">
        <div className="bg-paper text-ink p-8 sm:p-16">
          <h2 className="font-display font-700 uppercase text-5xl sm:text-7xl leading-none">
            Давайте<br /><span className="text-flame">поработаем</span>
          </h2>
          <p className="mt-6 text-ink/70 text-lg max-w-md">
            Открыт для интересных проектов и сотрудничества. Напишите или позвоните.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <a
              href="tel:+79228224458"
              className="group flex items-center gap-4 border border-ink/15 p-6 hover:bg-flame hover:border-flame transition-colors"
            >
              <Icon name="Phone" size={28} className="text-flame group-hover:text-ink" />
              <div>
                <div className="uppercase tracking-widest text-xs text-ink/50 group-hover:text-ink/70">Телефон</div>
                <div className="font-display font-600 text-2xl">+7 922 822-44-58</div>
              </div>
            </a>
            <a
              href="https://t.me/+79228224458"
              className="group flex items-center gap-4 border border-ink/15 p-6 hover:bg-electric hover:border-electric transition-colors"
            >
              <Icon name="Send" size={28} className="text-electric group-hover:text-paper" />
              <div>
                <div className="uppercase tracking-widest text-xs text-ink/50 group-hover:text-paper/70">Telegram</div>
                <div className="font-display font-600 text-2xl group-hover:text-paper">Написать</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 sm:px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-700 text-xl">Р<span className="text-flame">.</span>А</span>
          <span className="text-paper/40 text-sm">© 2024 Роман Амбарцумян</span>
          <span className="text-paper/40 text-sm uppercase tracking-widest">Сделано с характером</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;