import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Braces,
  Check,
  Clock3,
  Code2,
  FileCheck2,
  LockKeyhole,
  Network,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlexInsur | Embedded Insurance para checkouts digitais" },
      { name: "description", content: "Transforme incerteza em receita com proteção integrada ao checkout, operação automatizada e risco segurado." },
      { property: "og:title", content: "FlexInsur | O fim da incerteza no checkout digital" },
      { property: "og:description", content: "Embedded Insurance para novas receitas, mais conversão e proteção total ao cliente." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ecosystem = [
  { icon: TrendingUp, label: "A", title: "Para Produtores", text: "Destrava vendas retidas pelo medo do cliente e zera disputas de reembolso." },
  { icon: Users, label: "B", title: "Para Clientes", text: "Proteção absoluta do capital investido contra imprevistos de saúde e transporte." },
  { icon: Network, label: "C", title: "Para Plataformas", text: "Nova linha de receita pura via Revenue Share automatizado, sem custo operacional ou de suporte." },
];

const trust = [
  { icon: Zap, title: "API assíncrona", text: "Respostas rápidas sem bloquear seu checkout." },
  { icon: Braces, title: "Integração leve", text: "Poucas linhas de código. Zero impacto na performance." },
  { icon: FileCheck2, title: "Validação com IA", text: "OCR automatizado para análise documental em escala." },
  { icon: ShieldCheck, title: "Risco 100% segurado", text: "Cobertura por seguradoras digitais tier-1 reguladas pela SUSEP." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-20 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-12">
          <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label="FlexInsur — início">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><ShieldCheck className="h-5 w-5" /></span>
            <span className="truncate text-xl font-extrabold">Flex<span className="text-primary">Insur</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#solucao" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Solução</a>
            <a href="#modelo" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Modelo de Ganho</a>
            <a href="#seguranca" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Segurança</a>
          </div>
          <a href="https://calendly.com/daviretty" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 cursor-pointer items-center justify-center justify-self-end gap-2 whitespace-nowrap rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[0_0_30px_var(--primary-glow)] transition-colors hover:bg-primary/90 sm:px-5"><span className="hidden sm:inline">Falar com Especialista</span><span className="sm:hidden">Falar agora</span><ArrowRight className="h-4 w-4" /></a>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border pt-24">
        <div className="grid-fade absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="absolute left-1/2 top-[18%] h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-success-soft px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"><Sparkles className="h-3.5 w-3.5" /> Embedded Insurance, sem fricção</div>
          <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl">O fim da incerteza no <span className="text-primary">checkout digital</span></h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">Acople linhas de receita líquida via Embedded Insurance diretamente na sua plataforma, com impacto zero em performance técnica.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://calendly.com/daviretty" target="_blank" rel="noopener noreferrer" className="inline-flex h-13 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_0_30px_var(--primary-glow)] transition-colors hover:bg-primary/90">Solicitar Piloto de 30 Dias <ArrowRight className="h-4 w-4" /></a>
            <a href="#seguranca" className="inline-flex h-13 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border-bright bg-surface-glass px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-accent"><Code2 className="h-4 w-4" /> Ver Documentação API</a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-semibold text-muted-foreground sm:text-sm">
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Sem custo de implantação</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Go-live em até 7 dias</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Risco financeiro zero</span>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-warning">O problema invisível</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">O Fantasma do Carrinho Abandonado</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Em compras de alto valor, não é o preço que interrompe a decisão. É o medo de perder o investimento se um imprevisto impedir o cliente de participar.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6"><Clock3 className="mb-8 h-7 w-7 text-warning" /><p className="text-3xl font-extrabold">71%</p><p className="mt-2 text-sm leading-6 text-muted-foreground">dos carrinhos digitais são abandonados antes da confirmação.</p></div>
            <div className="rounded-lg border border-border bg-card p-6"><ReceiptText className="mb-8 h-7 w-7 text-primary" /><p className="text-lg font-bold">“E se eu não puder ir?”</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Saúde, logística e transporte transformam intenção real em hesitação financeira.</p></div>
          </div>
        </div>
      </section>

      <section id="solucao" className="overflow-hidden border-b border-border py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">A solução no ponto de decisão</p>
            <h2 className="text-3xl font-extrabold sm:text-5xl">FlexInsur Guarantee</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Uma camada de confiança nativa no checkout. O cliente protege a compra com um clique, você aumenta conversão e todos ganham.</p>
            <div className="mt-8 space-y-3 text-sm font-semibold"><p className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Oferta contextual, no momento certo</p><p className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Precificação dinâmica por transação</p><p className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Jornada de reembolso automatizada</p></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-primary/15 blur-[80px]" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-lg border border-border-bright bg-card shadow-2xl">
              <div className="flex items-center justify-between border-b border-border px-5 py-4"><span className="text-sm font-bold">Resumo do pedido</span><LockKeyhole className="h-4 w-4 text-muted-foreground" /></div>
              <div className="space-y-5 p-5 sm:p-7">
                <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Imersão Growth Pro</span><span className="font-bold">R$ 2.997,00</span></div>
                <div className="flex items-start gap-3 rounded-lg border border-primary/50 bg-success-soft p-4">
                  <input type="checkbox" defaultChecked aria-label="Adicionar Garantia" className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-primary" />
                  <div className="min-w-0"><p className="text-sm font-bold sm:text-base">Adicionar Garantia por <span className="text-primary">R$ 29,90</span></p><p className="mt-1.5 flex items-start gap-1.5 text-xs leading-5 text-muted-foreground"><LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> Reembolso integral automatizado em caso de imprevistos médicos ou logísticos.</p></div>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-5"><span className="font-bold">Total</span><span className="text-xl font-extrabold">R$ 3.026,90</span></div>
                <a href="mailto:contato@flexinsur.com?subject=Checkout%20com%20proteção" className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[0_0_30px_var(--primary-glow)] transition-colors hover:bg-primary/90">Finalizar compra com proteção <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modelo" className="border-b border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl"><p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Efeito composto</p><h2 className="text-3xl font-extrabold sm:text-5xl">Um ecossistema Win-Win-Win</h2><p className="mt-5 text-muted-foreground">Incentivos alinhados de ponta a ponta. Sem transferir complexidade para ninguém.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {ecosystem.map(({ icon: Icon, label, title, text }) => <article key={label} className="bg-card p-7 sm:p-9"><div className="mb-10 flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-md bg-success-soft text-primary"><Icon className="h-6 w-6" /></span><span className="font-mono text-xs text-muted-foreground">0{label.charCodeAt(0) - 64}</span></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="seguranca" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Tech & Trust</p><h2 className="text-3xl font-extrabold sm:text-5xl">Robusta por trás.<br />Invisível na frente.</h2></div><p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">Infraestrutura desenhada para escala, com automação integral e respaldo regulatório. Sua equipe integra uma vez; a FlexInsur opera o resto.</p></div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{trust.map(({ icon: Icon, title, text }) => <article key={title} className="border-t border-border-bright pt-6"><Icon className="h-6 w-6 text-primary" /><h3 className="mt-6 font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
          <div className="mt-14 flex flex-col gap-5 rounded-lg border border-primary/25 bg-success-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"><div className="flex min-w-0 items-start gap-4"><ShieldCheck className="h-8 w-8 shrink-0 text-primary" /><div><p className="font-bold">Governança e solidez regulatória</p><p className="mt-1 text-sm leading-6 text-muted-foreground">O risco financeiro é 100% respaldado por seguradoras digitais tier-1 reguladas pela SUSEP.</p></div></div><span className="shrink-0 rounded-full border border-primary/30 px-3 py-1.5 text-xs font-bold text-primary">SUSEP REGULATED</span></div>
        </div>
      </section>

      <section className="py-24 text-center sm:py-32"><div className="mx-auto max-w-3xl px-5"><h2 className="text-3xl font-extrabold sm:text-5xl">Sua próxima linha de receita já está no checkout.</h2><p className="mx-auto mt-6 max-w-xl text-muted-foreground">Valide o impacto da FlexInsur por 30 dias, com integração assistida e sem custo de implantação.</p><a href="https://calendly.com/daviretty" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex h-13 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-7 text-sm font-medium text-primary-foreground shadow-[0_0_30px_var(--primary-glow)] transition-colors hover:bg-primary/90">Solicitar Piloto de 30 Dias <ArrowRight className="h-4 w-4" /></a></div></section>

      <footer className="border-t border-border bg-surface py-10"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end lg:px-12"><div className="min-w-0"><a href="#top" className="text-lg font-extrabold">Flex<span className="text-primary">Insur</span></a><p className="mt-4 max-w-xl text-xs leading-5 text-muted-foreground">© 2026 FlexInsur. Todos os direitos reservados. Disrupção no mercado de seguros.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"><a href="#solucao" className="hover:text-foreground">Solução</a><a href="#seguranca" className="hover:text-foreground">Segurança</a><a href="mailto:contato@flexinsur.com" className="text-foreground">contato@flexinsur.com</a></div></div></footer>
    </main>
  );
}
