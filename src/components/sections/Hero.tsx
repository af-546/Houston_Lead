import { MagneticLink } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { communityStats } from "@/data/site";
import { motion } from "framer-motion";

function NetworkVisual() {
  const nodes = [
    { x: 50, y: 20, size: 12 },
    { x: 20, y: 45, size: 10 },
    { x: 80, y: 40, size: 10 },
    { x: 35, y: 75, size: 9 },
    { x: 65, y: 70, size: 11 },
    { x: 50, y: 50, size: 16 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto">
      <div className="absolute inset-0 rounded-full bg-brand/5 blur-3xl" />
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
        {nodes.slice(0, -1).map((node, i) => (
          <motion.line
            key={`line-${i}`}
            x1={50}
            y1={50}
            x2={node.x}
            y2={node.y}
            stroke="rgba(228, 192, 74, 0.25)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.size / 10}
            fill={i === nodes.length - 1 ? "#e4c04a" : "rgba(228, 192, 74, 0.6)"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 200 }}
          />
        ))}
      </svg>
      <div className="absolute bottom-4 left-0 right-0 grid grid-cols-2 gap-3 px-2">
        {communityStats.slice(0, 2).map((stat) => (
          <div key={stat.label} className="glass-panel rounded-xl px-4 py-3 text-center">
            <p className="font-display text-xl font-bold text-gradient">{stat.value}</p>
            <p className="text-xs text-ink-muted mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-section relative min-h-[88svh] flex items-center section-padding pt-28 pb-12 overflow-x-hidden">
      <div className="section-container w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">Greater Houston business networking</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="heading-xl mb-6">
              Connect. Collaborate.{" "}
              <span className="text-gradient">Grow together.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-ink-soft max-w-lg mb-10 leading-relaxed">
              Houston LEAD is the premier community for business leaders ready to build
              meaningful connections through structured referrals, peer advisory, and
              results-driven networking.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4">
              <MagneticLink to="/apply" className="btn-primary">
                Apply for membership →
              </MagneticLink>
              <MagneticLink to="/chapters" className="btn-ghost">
                Find a chapter
              </MagneticLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative hidden md:block pointer-events-none select-none">
          <NetworkVisual />
        </Reveal>

        <Reveal delay={0.1} className="md:hidden max-w-xs mx-auto">
          <NetworkVisual />
        </Reveal>
      </div>
    </section>
  );
}
