export function Starfield({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 starfield" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-50 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.55 0.25 295 / 0.5), transparent 60%)" }} />
      <div className="absolute top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.6 0.2 200 / 0.5), transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full opacity-40 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.55 0.22 320 / 0.4), transparent 60%)" }} />
    </div>
  );
}
