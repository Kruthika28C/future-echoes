import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Upload, Linkedin, Sparkles, Heart, Target, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Starfield } from "@/components/cv/Starfield";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Onboarding · CareerVerse" }, { name: "description", content: "Calibrate the multiverse to you." }] }),
  component: Onboarding,
});

const steps = [
  { id: "resume", title: "Bring your story", subtitle: "Upload your resume — we'll listen between the lines.", icon: Upload },
  { id: "linkedin", title: "Sync your trajectory", subtitle: "Pull your professional graph from LinkedIn.", icon: Linkedin },
  { id: "skills", title: "Confirm your gifts", subtitle: "These are the talents we noticed. Refine them.", icon: Sparkles },
  { id: "personality", title: "Map your inner world", subtitle: "A few questions about how you move through life.", icon: Heart },
  { id: "goals", title: "Name what matters", subtitle: "What does a good life look like to you?", icon: Target },
];

const skills = ["Strategic Thinking", "Creative Direction", "Engineering", "Storytelling", "Leadership", "Empathy", "Systems Design", "AI Fluency", "Public Speaking", "Research"];
const traits = [
  { q: "When facing the unknown, I…", a: ["Run toward it", "Map it carefully", "Sit with it", "Ask others"] },
  { q: "My ideal day involves…", a: ["Deep focus", "Many people", "Building something", "Wandering"] },
  { q: "I am energized by…", a: ["Beauty", "Impact", "Mastery", "Freedom"] },
];
const values = ["Freedom", "Mastery", "Impact", "Wealth", "Family", "Adventure", "Calm", "Status", "Creativity", "Truth"];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Storytelling", "Creative Direction", "AI Fluency"]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else navigate({ to: "/dashboard" });
  };
  const back = () => step > 0 && setStep(step - 1);

  const toggle = <T,>(arr: T[], v: T, set: (x: T[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const Step = steps[step];

  return (
    <div className="relative min-h-screen pb-24">
      <Starfield />
      <div className="relative mx-auto max-w-3xl px-6 pt-8">
        {/* progress */}
        <div className="flex items-center justify-between mb-12">
          {steps.map((s, i) => (
            <div key={s.id} className="flex-1 flex items-center">
              <div className={`h-2 w-2 rounded-full transition-all ${i <= step ? "bg-aurora glow-primary scale-125" : "bg-white/15"}`} />
              {i < steps.length - 1 && <div className={`flex-1 h-px mx-2 ${i < step ? "bg-aurora" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                <Step.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Step {step + 1} of {steps.length}</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mt-0.5">{Step.title}</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-8">{Step.subtitle}</p>

            {step === 0 && (
              <label className="block border-2 border-dashed border-white/15 rounded-2xl p-12 text-center cursor-pointer hover:border-primary/60 hover:bg-white/[0.02] transition">
                <Upload className="h-10 w-10 mx-auto text-aurora mb-4" />
                <div className="font-medium">Drop resume.pdf or click to browse</div>
                <div className="text-xs text-muted-foreground mt-2">PDF, DOCX · We never store your file</div>
                <input type="file" accept=".pdf,.docx" className="hidden" />
              </label>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between glass rounded-2xl p-5 hover:bg-white/10 transition">
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-secondary" />
                    <div className="text-left">
                      <div className="font-medium">Connect LinkedIn</div>
                      <div className="text-xs text-muted-foreground">Pull your roles, skills, and endorsements</div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </button>
                <p className="text-xs text-center text-muted-foreground">Or skip — we'll work with what we have.</p>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-wrap gap-2.5">
                {skills.map((s) => {
                  const on = selectedSkills.includes(s);
                  return (
                    <button key={s} onClick={() => toggle(selectedSkills, s, setSelectedSkills)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                        on ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-primary"
                           : "glass hover:bg-white/10"
                      }`}>
                      {on && <Check className="h-3.5 w-3.5" />} {s}
                    </button>
                  );
                })}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                {traits.map((t, i) => (
                  <div key={i}>
                    <div className="text-sm font-medium mb-3">{t.q}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {t.a.map((opt) => (
                        <button key={opt} onClick={() => setAnswers({ ...answers, [i]: opt })}
                          className={`px-4 py-3 rounded-xl text-sm transition-all text-left ${
                            answers[i] === opt ? "bg-primary/20 border border-primary/60 text-foreground"
                                               : "glass hover:bg-white/10"
                          }`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="text-xs text-muted-foreground mb-4">Pick the 3–5 values that feel most like you.</p>
                <div className="flex flex-wrap gap-2.5">
                  {values.map((v) => {
                    const on = selectedValues.includes(v);
                    return (
                      <button key={v} onClick={() => toggle(selectedValues, v, setSelectedValues)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          on ? "bg-gradient-to-r from-secondary to-accent text-primary-foreground glow-aurora"
                             : "glass hover:bg-white/10"
                        }`}>
                        {v}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-10 flex items-center justify-between">
              <button onClick={back} disabled={step === 0}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass disabled:opacity-30 hover:bg-white/10 transition text-sm">
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button onClick={next}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-semibold glow-primary hover:scale-[1.02] transition">
                {step === steps.length - 1 ? "Generate my multiverse" : "Continue"} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
