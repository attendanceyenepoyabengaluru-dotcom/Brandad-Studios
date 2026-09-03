import { motion, useScroll, useTransform } from 'motion/react';
import { MouseEvent, useRef, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Amplify mouse movement for the dramatic 3D effect
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    setMousePosition({ x, y });
  };

  const titleLines = ["Make Your Brand", "Impossible to Ignore."];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-dark"
    >
      {/* Dynamic Background Spotlight based on Mouse */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-orange) 0%, transparent 70%)',
          x: mousePosition.x * 2 - 400,
          y: mousePosition.y * 2 - 400,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Editorial Typography Content */}
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col gap-8"
        >
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 origin-left"
          >
            <span className="w-12 h-[1px] bg-brand-orange"></span>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-brand-orange text-xs font-bold tracking-[0.2em] uppercase"
            >
              Content • Production • Social • Digital
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-tight flex flex-col gap-2"
          >
            <span>Make Your Brand</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
              Impossible to Ignore.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/50 max-w-lg font-light leading-snug"
          >
            We create powerful visual content and digital experiences for businesses that want to stand out, connect with their audience, and grow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-dark font-bold hover:bg-brand-orange hover:text-white transition-colors duration-500 flex items-center justify-center gap-3 group rounded-full">
              Start a Project 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="w-full sm:w-auto group flex items-center justify-center gap-4 text-white/50 hover:text-white transition-colors">
              <span className="flex items-center justify-center w-14 h-14 border border-white/20 rounded-full group-hover:border-brand-orange group-hover:text-brand-orange transition-all duration-500 group-hover:scale-110">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 6.13397C12.1667 6.51887 12.1667 7.48113 11.5 7.86603L1.75 13.4952C1.08333 13.8801 0.25 13.399 0.25 12.6292L0.25 1.37083C0.25 0.601035 1.08333 0.11991 1.75 0.50481L11.5 6.13397Z" />
                </svg>
              </span>
              <span className="font-medium tracking-wide uppercase text-sm">Let's Talk</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive "Goo/Glass" Core */}
        <motion.div 
          className="relative hidden lg:flex h-[400px] md:h-[700px] items-center justify-center perspective-[1200px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glass Shell */}
          <motion.div
            animate={{ 
              rotateY: mousePosition.x * 0.8,
              rotateX: mousePosition.y * 0.8,
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              rotateY: { type: "spring", stiffness: 40, damping: 20 },
              rotateX: { type: "spring", stiffness: 40, damping: 20 },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0 m-auto w-[280px] h-[380px] md:w-[400px] md:h-[500px] rounded-[3rem] border border-white/10 backdrop-blur-md bg-white/[0.02] shadow-[inset_0_0_80px_rgba(255,255,255,0.02)] flex items-center justify-center overflow-hidden z-20 preserve-3d"
          >
            {/* Grid overlay inside the glass */}
            <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay"
                 style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            {/* Glowing Orange Core */}
            <motion.div 
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[200px] h-[200px] bg-brand-orange rounded-full blur-[60px] opacity-60 z-0"
            />

            {/* Logo Image nested inside the glass shell */}
            <motion.img 
              animate={{
                rotateY: mousePosition.x * 0.2,
                rotateX: mousePosition.y * 0.2,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 10 }}
              src="https://res.cloudinary.com/djlvnetvs/image/upload/v1788335195/bbb_yllpgt.png" 
              alt="BrandAd Logo" 
              className="w-48 md:w-64 relative z-10 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          {/* Floating fragments */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 rounded-xl border border-white/10 backdrop-blur-md bg-white/[0.01] z-30 flex items-center justify-center"
              animate={{
                y: [i * 20, -i * 20, i * 20],
                rotate: [0, 180, 360],
                x: mousePosition.x * (i + 1),
                y: mousePosition.y * (i + 1),
              }}
              transition={{
                y: { duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                x: { type: "spring", stiffness: 50, damping: 20 },
              }}
              style={{
                top: `${20 + i * 25}%`,
                left: `${10 + (i % 2) * 60}%`,
              }}
            >
               <div className="w-2 h-2 rounded-full bg-brand-orange/50 shadow-[0_0_10px_var(--color-brand-orange)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
}
