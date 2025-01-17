import { Calculator } from '@/components/Calculator/Calculator';

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-purple-950 p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>
      <Calculator />
    </div>
  );
}