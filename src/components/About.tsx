import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, Play, Layout, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const stats = [
    { label: "Creative", icon: <Layout className="w-5 h-5 text-brand-orange" /> },
    { label: "Strategy", icon: <Zap className="w-5 h-5 text-brand-orange" /> },
    { label: "Technology", icon: <Camera className="w-5 h-5 text-brand-orange" /> },
    { label: "Execution", icon: <Play className="w-5 h-5 text-brand-orange" /> },
  ];

  const headingLines = ["Your business", "has a story.", "We make people", "stop and watch."];

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-12">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
          >
            Your business <br/>
            has a story. <br/>
            <span className="text-white/40">We make people <br/> stop and watch.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-lg"
          >
            <p>Every business has something worth talking about.</p>
            <p>We turn your ideas, products, services and personality into creative content that captures attention and gives your brand a stronger presence.</p>
            <p>From the first concept to the final frame, we bring together <strong className="font-semibold text-white/90">strategy, creativity, production and digital</strong> to help your business communicate better.</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-px bg-white/10 mt-4 rounded-3xl overflow-hidden border border-white/10">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                className="flex items-center gap-4 p-6 bg-brand-dark hover:bg-white/[0.03] transition-colors"
              >
                <div className="text-brand-orange">
                  {stat.icon}
                </div>
                <span className="font-semibold tracking-wide text-white/90 text-sm uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <motion.div 
          style={{ scale, opacity }}
          className="hidden lg:block relative h-[500px] md:h-[700px] w-full rounded-[2rem] overflow-hidden border border-white/10 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2000&auto=format&fit=crop"
            alt="Creative Production"
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
