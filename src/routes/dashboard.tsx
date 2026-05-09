import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GitCompareArrows, Sparkles } from "lucide-react";
import { universes } from "@/lib/universes";
import { UniverseCard } from "@/components/cv/UniverseCard";
import { Starfield } from "@/components/cv/Starfield";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Your Multiverse · CareerVerse" }, { name: "description", content: "Five parallel futures, simulated for you." }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="relative pb-20">
      <Starfield />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-3xl"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-aurora" /> Simulation complete · 5 universes generated
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Your <span className="text-aurora">multiverse</span> is ready.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            These are five lives you could plausibly live, ordered by how closely they echo who you already are.
            Open one to meet your future self.
          </p>
          <Link to="/compare"
            className="mt-7 inline-flex items-center gap-2 glass hover:bg-white/10 rounded-2xl px-5 py-3 text-sm font-medium transition">
            <GitCompareArrows className="h-4 w-4 text-aurora" /> Compare universes side by side
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universes.map((u, i) => <UniverseCard key={u.id} u={u} index={i} />)}
        </div>
      </div>
    </div>
  );
}
