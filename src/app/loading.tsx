export default function Loading() {
  return (
    <div className="grid-bg min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-copper-900" />
          <div className="absolute inset-0 rounded-full border-t-2 border-copper-500 animate-spin" />
          <div className="absolute inset-2 rounded-full bg-copper-gradient opacity-20 animate-pulse" />
        </div>
        <p className="font-display text-copper-400 text-lg font-semibold animate-pulse">Loading...</p>
        <p className="text-white/30 text-sm mt-1">Power Cable</p>
      </div>
    </div>
  );
}
