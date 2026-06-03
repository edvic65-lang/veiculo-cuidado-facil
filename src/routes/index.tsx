import { createFileRoute } from "@tanstack/react-router";
import appMockup from "@/assets/app-mockup.png";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  BellRing,
  TrendingUp,
  Car,
  Receipt,
  ShieldCheck,
  Star,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iServCar — Gestão de manutenção do seu veículo" },
      { name: "description", content: "Controle revisões, gastos e alertas de carros, motos e caminhões. Ideal para motoristas de aplicativo. Economize com manutenção preventiva e valorize seu veículo na revenda." },
      { property: "og:title", content: "iServCar — Gestão de manutenção veicular" },
      { property: "og:description", content: "Nunca mais esqueça uma troca de óleo. Alertas de revisão e manutenção na palma da mão." },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: Wrench,
    title: "Controle total de revisões",
    desc: "Carros, motos e caminhões em um só lugar. Acompanhe quilometragem, peças e serviços com precisão.",
  },
  {
    icon: BellRing,
    title: "Alertas inteligentes",
    desc: "Receba avisos de troca de óleo, correia dentada, filtros, pastilhas de freio e demais serviços antes que virem dor de cabeça.",
  },
  {
    icon: TrendingUp,
    title: "Valoriza na revenda",
    desc: "Um histórico completo e organizado mostra ao comprador que o veículo foi bem cuidado — e vale mais.",
  },
];

const steps = [
  { icon: Car, title: "Cadastre seu veículo", desc: "Adicione carro, moto ou caminhão em segundos." },
  { icon: Receipt, title: "Registre seus gastos", desc: "Peças, serviços e revisões — tudo organizado." },
  { icon: BellRing, title: "Receba alertas", desc: "Saiba o momento certo de cada revisão e manutenção." },
];

const testimonials = [
  {
    name: "Rafael M.",
    role: "Motorista de app",
    text: "Reduzi meus gastos com oficina em mais de 30%. Minha única preocupação é dirigir. Os alertas de manutenção preventiva salvaram meu motor.",
  },
  {
    name: "Camila S.",
    role: "Dona de um carro e uma moto",
    text: "Finalmente um app simples e objetivo que entende quem tem mais de um veículo. Vendi uma moto pelo preço cheio mostrando o histórico!",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2 text-primary-foreground">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-lg font-bold tracking-tight">iServCar</span>
          </div>
          <Button variant="secondary" size="sm" className="rounded-full font-semibold">
            Baixe Agora
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,oklch(0.7_0.18_250)_0%,transparent_50%),radial-gradient(circle_at_80%_60%,oklch(0.72_0.16_165)_0%,transparent_45%)]" />
        <div className="container relative mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Ideal para motoristas de app
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Nunca mais esqueça uma troca de óleo.
              <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                A saúde do seu veículo na palma da mão.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Controle revisões, gastos e tenha alertas para manutenção de carros, motos e caminhões. Perfeito para motoristas de aplicativo e taxistas. Economize com manutenção preventiva e evite surpresas com a mecânica.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-[var(--shadow-elegant)]">Comprar por R$ 9,99
              </Button> 
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span>4.9 / 5 — avaliação na App Store e Play Store</span>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 -z-10 mx-auto h-[420px] w-[420px] rounded-full bg-primary-glow/40 blur-3xl" />
            <img
              src={appMockup}
              alt="Mockup do aplicativo iServCar em um smartphone"
              width={1024}
              height={1024}
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tudo que seu veículo precisa, organizado pra você
            </h2>
            <p className="mt-4 text-muted-foreground">
              Economize tempo, dinheiro e evite imprevistos com uma plataforma feita para quem leva manutenção a sério.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Como funciona</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Em 3 passos simples
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-lg">
                  {i + 1}
                </div>
                <s.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Quem usa, recomenda
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground font-semibold"
                    style={{ backgroundImage: "var(--gradient-primary)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-center text-primary-foreground md:p-16"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Comece a economizar hoje
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Baixe o iServCar agora e tenha o acesso vitalício para o controle completo da manutenção de até dois veículos por apenas R$ 9,99.
          </p>
          <Button size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-[var(--shadow-elegant)]">
            Comprar por R$ 9,99
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="font-semibold">iServCar</span>
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Termos de uso</a>
            <a href="#" className="hover:text-foreground">Privacidade</a>
            <a href="#" className="hover:text-foreground">Contato</a>
          </div>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-primary"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
