export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(191,18,238,0.16),transparent_34%),radial-gradient(circle_at_80%_48%,rgba(99,102,241,0.12),transparent_30%),linear-gradient(180deg,#050505_0%,#0c0714_44%,#030307_100%)]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 30px)" }} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.72)_100%)]" />
    </div>
  );
}
