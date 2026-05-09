import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Universe } from "@/lib/universes";

export function UniverseCard({ u, index }: { u: Universe; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <Link to="/universe/$id" params={{ id: u.id }} className="block">
        <div className="glass-strong rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/40 transition-all duration-500 group-hover:glow-primary">
          <div className="relative h-72 overflow-hidden">
            <img src={u.image} alt={u.name} loading="lazy" width={1024} height={1280}
                 className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
            <div className={`absolute inset-0 bg-gradient-to-t ${u.accent}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora animate-pulse-glow" />
              Universe #{String(index + 1).padStart(2, "0")}
            </div>
            <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5 text-xs font-semibold text-aurora">
              {u.match}% match
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display text-2xl font-semibold leading-tight">{u.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{u.role}</p>
            </div>
          </div>

          <div className="p-5 space-y-4">
            <p className="text-sm text-foreground/80 leading-relaxed">{u.tagline}</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <Stat label="Salary" value={u.salary} />
              <Stat label="Lifestyle" value={`${u.lifestyle}`} />
              <Stat label="Happiness" value={`${u.happiness}`} />
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-primary" /> AI-simulated
              </span>
              <span className="text-sm font-medium text-aurora flex items-center gap-1 group-hover:gap-2 transition-all">
                Enter universe <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/5 py-2">
      <div className="text-sm font-semibold">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
