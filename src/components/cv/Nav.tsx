import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-5 w-5 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/60 -z-10 group-hover:bg-primary transition" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              Career<span className="text-aurora">Verse</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <Link to="/dashboard" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Multiverse</Link>
            <Link to="/compare" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Compare</Link>
            <Link to="/onboarding" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Restart</Link>
          </nav>
          <Link
            to="/onboarding"
            className="text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:opacity-90 transition glow-primary"
          >
            Enter
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>CareerVerse · A multiverse for your future self.</span>
        </div>
        <div className="flex gap-6">
          <span>© 2026</span>
          <span>Built with light-years of love.</span>
        </div>
      </div>
    </footer>
  );
}
