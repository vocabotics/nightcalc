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
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`planet-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 50 + 20 + 'px',
              height: Math.random() * 50 + 20 + 'px',
              top: Math.random() * 80 + 10 + '%',
              left: Math.random() * 80 + 10 + '%',
              background: `radial-gradient(circle at 30% 30%, rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}), rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}))`,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
              opacity: 0.7
            }}
          />
        ))}
      </div>
      <Calculator />
    </div>
  );
}