import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Check } from "lucide-react";
import { universes } from "@/lib/universes";
import { Starfield } from "@/components/cv/Starfield";

export const Route = createFileRoute("/compare")({
  head: () => ({ meta: [{ title: "Compare Universes · CareerVerse" }, { name: "description", content: "Compare your parallel futures side by side." }] }),
  component: Compare,
});

const colors = ["oklch(0.78 0.18 285)", "oklch(0.82 0.18 200)", "oklch(0.75 0.18 320)"];

function Compare() {
  const [selected, setSelected] = useState<string[]>([universes[0].id, universes[2].id]);

  const toggle = (id: string) => {
    if (selected.includes(id)) setSelected(selected.filter((x) => x !== id));
    else if (selected.length < 3) setSelected([...selected, id]);
  };

  const chosen = selected.map((id) => universes.find((u) => u.id === id)!).filter(Boolean);

  const radarData = ["Happiness", "Growth", "Balance", "Lifestyle", "Impact"].map((axis) => {
    const row: Record<string, string | number> = { axis };
    chosen.forEach((u) => {
      const map: Record<string, number> = {
        Happiness: u.happiness, Growth: u.growth, Balance: u.balance, Lifestyle: u.lifestyle, Impact: u.impact,
      };
      row[u.name] = map[axis];
    });
    return row;
  });

  const salaryData = chosen.map((u) => ({ name: u.name.replace(/^The /, ""), salary: u.salaryNum }));

  return (
    <div className="relative pb-20">
      <Starfield />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-aurora mb-3">Comparison</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">Which life feels more like home?</h1>
          <p className="mt-4 text-muted-foreground text-lg">Pick up to three universes to compare side by side.</p>
        </motion.div>

        <div className="flex flex-wrap gap-2.5 mb-12">
          {universes.map((u) => {
            const on = selected.includes(u.id);
            return (
              <button key={u.id} onClick={() => toggle(u.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${
                  on ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-primary"
                     : "glass hover:bg-white/10"
                }`}>
                {on && <Check className="h-3.5 w-3.5" />} {u.name}
              </button>
            );
          })}
        </div>

        {chosen.length === 0 ? (
          <div className="glass-strong rounded-3xl p-12 text-center text-muted-foreground">Select universes above.</div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="glass-strong rounded-3xl p-6 h-[420px]">
              <h3 className="font-display text-lg mb-4">Lifestyle radar</h3>
              <ResponsiveContainer width="100%" height="90%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="oklch(1 0 0 / 0.1)" />
                  <PolarAngleAxis dataKey="axis" stroke="oklch(0.85 0.04 280)" fontSize={12} />
                  <PolarRadiusAxis stroke="oklch(1 0 0 / 0.1)" tick={false} />
                  {chosen.map((u, i) => (
                    <Radar key={u.id} name={u.name} dataKey={u.name}
                      stroke={colors[i]} fill={colors[i]} fillOpacity={0.25} strokeWidth={2} />
                  ))}
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: "oklch(0.18 0.05 280 / 0.9)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="glass-strong rounded-3xl p-6 h-[420px]">
              <h3 className="font-display text-lg mb-4">Projected salary at year 10</h3>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={salaryData}>
                  <XAxis dataKey="name" stroke="oklch(0.72 0.04 280)" fontSize={11} />
                  <YAxis stroke="oklch(0.72 0.04 280)" fontSize={11} tickFormatter={(v) => `$${v}k`} />
                  <Tooltip contentStyle={{ background: "oklch(0.18 0.05 280 / 0.9)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }}
                           formatter={(v) => [`$${v}k`, "Salary"]} />
                  <Bar dataKey="salary" radius={[10, 10, 0, 0]}>
                    {salaryData.map((_, i) => <cell key={i} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="glass-strong rounded-3xl p-6 lg:col-span-2 overflow-x-auto">
              <h3 className="font-display text-lg mb-4">Side by side</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="py-3 pr-4 font-medium">Metric</th>
                    {chosen.map((u, i) => (
                      <th key={u.id} className="py-3 pr-4 font-medium">
                        <span className="inline-flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: colors[i] }} />
                          {u.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Role", (u: typeof chosen[0]) => u.role],
                    ["Match", (u: typeof chosen[0]) => `${u.match}%`],
                    ["Salary (Y10)", (u: typeof chosen[0]) => u.salary],
                    ["Happiness", (u: typeof chosen[0]) => `${u.happiness}/100`],
                    ["Work-life balance", (u: typeof chosen[0]) => `${u.balance}/100`],
                    ["Growth", (u: typeof chosen[0]) => `${u.growth}/100`],
                    ["Impact", (u: typeof chosen[0]) => `${u.impact}/100`],
                  ].map(([label, fn]) => (
                    <tr key={label as string} className="border-t border-white/5">
                      <td className="py-3 pr-4 text-muted-foreground">{label as string}</td>
                      {chosen.map((u) => (
                        <td key={u.id} className="py-3 pr-4">{(fn as (u: typeof chosen[0]) => string)(u)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
