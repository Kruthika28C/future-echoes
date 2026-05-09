import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, Send, Sparkles, TrendingUp, Heart, Briefcase, Clock, ChevronRight } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { getUniverse } from "@/lib/universes";
import { Starfield } from "@/components/cv/Starfield";

export const Route = createFileRoute("/universe/$id")({
  loader: ({ params }) => {
    const u = getUniverse(params.id);
    if (!u) throw notFound();
    return { u };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.u.name} · CareerVerse` },
      { name: "description", content: loaderData?.u.tagline ?? "" },
      { property: "og:image", content: loaderData?.u.image ?? "" },
    ],
  }),
  component: UniverseDetail,
});

function UniverseDetail() {
  const { u } = Route.useLoaderData();
  const salaryData = [
    { year: "Y1", value: Math.round(u.salaryNum * 0.45) },
    { year: "Y3", value: Math.round(u.salaryNum * 0.65) },
    { year: "Y5", value: Math.round(u.salaryNum * 0.85) },
    { year: "Y10", value: u.salaryNum },
    { year: "Y15", value: Math.round(u.salaryNum * 1.4) },
  ];

  return (
    <div className="relative pb-20">
      {/* HERO */}
      <section className="relative h-[80vh] -mt-24 overflow-hidden">
        <img src={u.image} alt={u.name} width={1024} height={1280}
             className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
        <Starfield />

        <div className="relative mx-auto max-w-7xl px-6 h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to multiverse
            </Link>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora animate-pulse-glow" />
              {u.match}% resonance with who you are
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05]">{u.name}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{u.role}</p>
            <p className="mt-6 text-lg text-foreground/85 max-w-2xl leading-relaxed">{u.story}</p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 space-y-20 mt-16">
        {/* METRICS */}
        <Section title="Lifestyle in this universe">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { l: "Salary", v: u.salary, icon: Briefcase },
              { l: "Lifestyle", v: u.lifestyle, icon: Heart },
              { l: "Happiness", v: u.happiness, icon: Sparkles },
              { l: "Growth", v: u.growth, icon: TrendingUp },
              { l: "Balance", v: u.balance, icon: Clock },
            ].map((m) => (
              <div key={m.l} className="glass-strong rounded-2xl p-5">
                <m.icon className="h-5 w-5 text-aurora mb-3" />
                <div className="font-display text-2xl font-semibold">{m.v}{typeof m.v === "number" && <span className="text-sm text-muted-foreground">/100</span>}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{m.l}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* TIMELINE */}
        <Section title="Your trajectory" eyebrow="5 / 10 / 15 years">
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
            <div className="space-y-8">
              {u.timeline.map((t, i) => (
                <motion.div key={t.year}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-background" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.25em] text-aurora">{t.year}</div>
                  <div className="font-display text-xl font-semibold mt-1">{t.title}</div>
                  <p className="text-muted-foreground mt-1.5">{t.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* DAY IN LIFE + CHAT */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Section title="A day in this life">
            <div className="glass-strong rounded-3xl p-7 space-y-5">
              {u.dayInLife.map((d, i) => (
                <motion.div key={d.time}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <div className="font-display text-aurora font-medium tabular-nums w-14">{d.time}</div>
                  <div className="text-foreground/85 leading-relaxed flex-1">{d.moment}</div>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section title="Talk to your future self">
            <FutureSelfChat universeName={u.name} bio={u.futureSelfBio} initial={u.sampleChat} />
          </Section>
        </div>

        {/* SALARY CHART */}
        <Section title="Salary trajectory">
          <div className="glass-strong rounded-3xl p-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salaryData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="oklch(0.78 0.18 285)" />
                    <stop offset="100%" stopColor="oklch(0.82 0.18 200)" />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(1 0 0 / 0.06)" />
                <XAxis dataKey="year" stroke="oklch(0.72 0.04 280)" fontSize={12} />
                <YAxis stroke="oklch(0.72 0.04 280)" fontSize={12} tickFormatter={(v) => `$${v}k`} />
                <Tooltip contentStyle={{ background: "oklch(0.18 0.05 280 / 0.9)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, backdropFilter: "blur(20px)" }}
                         formatter={(v) => [`$${v}k`, "Salary"]} />
                <Line type="monotone" dataKey="value" stroke="url(#grad)" strokeWidth={3} dot={{ fill: "oklch(0.82 0.18 200)", r: 5 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Section>

        {/* SKILLS ROADMAP */}
        <Section title="Skills roadmap">
          <div className="glass-strong rounded-3xl p-7 space-y-5">
            {u.skills.map((s, i) => (
              <motion.div key={s.name}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground tabular-nums">{s.level}/100</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.06, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="glass-strong rounded-[2rem] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-50 blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.65 0.25 295 / 0.4), transparent 60%)" }} />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
              Choose this path?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We'll generate a 90-day starting roadmap, surface the right communities, and check in monthly.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent px-8 py-4 font-semibold text-primary-foreground glow-aurora hover:scale-[1.02] transition">
              Make this my path <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, eyebrow, children }: { title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section>
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-aurora mb-2">{eyebrow}</p>}
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  );
}

function FutureSelfChat({ universeName, bio, initial }: { universeName: string; bio: string; initial: { role: "future" | "you"; text: string }[] }) {
  const [messages, setMessages] = useState(initial);
  const [input, setInput] = useState("");

  const replies = [
    "It took longer than I expected. But the version of you that gets here was always inside.",
    "Trust the slow signal. The loud one usually lies.",
    "I remember asking that exact question. You'll know when the answer arrives in your body.",
    "Less optimization. More devotion. That changed everything.",
    "I'm proud of you for asking. That's the whole work, really.",
  ];

  const send = () => {
    if (!input.trim()) return;
    const next = [...messages, { role: "you" as const, text: input }];
    setMessages(next);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "future" as const, text: replies[Math.floor(Math.random() * replies.length)] }]);
    }, 900);
  };

  return (
    <div className="glass-strong rounded-3xl p-5 flex flex-col h-[500px]">
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <div className="font-medium text-sm">Future you · {universeName}</div>
          <div className="text-xs text-muted-foreground italic">"{bio}"</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4 space-y-3">
        {messages.map((m, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className={`flex ${m.role === "you" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              m.role === "you" ? "bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30"
                               : "glass"
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-2 pt-3 border-t border-white/10">
        <input value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask your future self anything…"
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition" />
        <button onClick={send}
          className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary hover:scale-105 transition">
          <Send className="h-4 w-4 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
}
