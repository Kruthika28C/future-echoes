import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Telescope, Brain, Compass, Infinity as InfinityIcon } from "lucide-react";
import heroImg from "@/assets/cosmic-hero.jpg";
import { Starfield } from "@/components/cv/Starfield";
import { universes } from "@/lib/universes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareerVerse — Step into the parallel universes of your future self" },
      { name: "description", content: "Cinematic AI simulations of who you could become. Explore parallel career universes based on your skills, personality, and dreams." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1920} height={1080}
               className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <Starfield />

        <div className="relative mx-auto max-w-7xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora animate-pulse-glow" />
              Now simulating · 2,841,302 possible futures
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight">
              Step into the <span className="text-aurora">parallel universes</span> of your future self.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              CareerVerse is a cinematic AI multiverse for your career. Explore the lives you could live,
              talk to the person you could become, and choose the path that feels like home.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/onboarding"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent px-7 py-4 text-base font-semibold text-primary-foreground glow-aurora hover:scale-[1.02] transition">
                Enter the Multiverse
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/dashboard"
                className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-4 text-base font-medium hover:bg-white/10 transition">
                Preview a universe
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <span className="opacity-70">Trusted by future versions of:</span>
              {["Designers", "Engineers", "Founders", "Scientists", "Storytellers"].map((t) => (
                <span key={t} className="font-display tracking-wide">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* floating orb */}
        <motion.div
          aria-hidden
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.18 285 / 0.6), oklch(0.55 0.22 220 / 0.3) 50%, transparent 70%)", filter: "blur(2px)" }}
        />
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-aurora mb-4">The experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Not a job board. <br /> A cinematic mirror of who you could become.
          </h2>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { icon: Brain, title: "Discover your signal", body: "We listen to your skills, values, personality, and the quiet ambitions you don't say out loud." },
            { icon: Telescope, title: "See parallel lives", body: "Five to seven cinematic futures, each rendered like a film you could star in tomorrow." },
            { icon: Compass, title: "Choose your path", body: "Talk to your future self. Compare lives. Pick the one that feels honest. We map the way." },
          ].map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-8 hover:border-primary/40 transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREVIEW UNIVERSES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-aurora mb-3">A glimpse</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold">Universes waiting for you</h2>
          </div>
          <Link to="/dashboard" className="text-sm text-aurora hover:underline">View all multiverse →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universes.slice(0, 3).map((u, i) => (
            <motion.div key={u.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-strong rounded-3xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={u.image} alt={u.name} loading="lazy" width={1024} height={1280}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl font-semibold">{u.name}</h3>
                  <p className="text-sm text-muted-foreground">{u.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { q: "I cried watching my future self talk back. I quit my job two weeks later — best decision of my life.", a: "Maya · Now: founder" },
            { q: "It felt like watching the trailer of my own life. I knew which one was mine within minutes.", a: "Devon · Now: research scientist" },
            { q: "Every career test felt like a quiz. CareerVerse felt like a film about me.", a: "Ana · Now: filmmaker" },
          ].map((t, i) => (
            <motion.figure key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-7"
            >
              <Sparkles className="h-5 w-5 text-aurora" />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">"{t.q}"</blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">{t.a}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="relative glass-strong rounded-[2rem] p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.65 0.25 295 / 0.5), transparent 60%)" }} />
          <div className="relative">
            <InfinityIcon className="h-10 w-10 mx-auto text-aurora" />
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-tight">
              Your future self <br /> is already waiting.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
              The simulation takes four minutes. The clarity could last a lifetime.
            </p>
            <Link to="/onboarding"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent px-8 py-4 text-base font-semibold text-primary-foreground glow-aurora hover:scale-[1.02] transition">
              Begin the simulation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
