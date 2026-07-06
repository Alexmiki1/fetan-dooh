interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-amber" />
      <span
        className={`font-mono text-xs uppercase tracking-[0.2em] ${
          light ? "text-amber" : "text-amber"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
