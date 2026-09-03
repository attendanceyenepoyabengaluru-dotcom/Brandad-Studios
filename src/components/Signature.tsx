import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Signature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  const items = [
    "Reels.", "Photos.", "Stories.", "Promotional videos.", "Campaign creatives.", "Social content."
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-brand-dark border-t border-white/5">
      {/* Background massive wireframe circle */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute hidden md:flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full border border-white/5 pointer-events-none z-0 items-center justify-center"
      >
        <div className="w-[80%] h-[80%] rounded-full border border-brand-orange/10" />
        <div className="absolute w-[60%] h-[60%] rounded-full border border-brand-orange/20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                One Shoot. <br/>
                <span className="text-brand-orange">A World of Content.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-lg mb-8">
                Creating content shouldn't feel like a never-ending task. We plan your production strategically so a single focused shoot can become a complete library of content for your digital presence.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 border border-white/10 rounded-full text-sm font-semibold tracking-wide text-white/80 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 border border-white/10 rounded-[2rem] bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-brand-orange/5 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out z-0" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-white">Plan once. Create more. Stay consistent.</h3>
              
              <div className="flex flex-col gap-6">
                <div className="opacity-50">
                  <p className="text-sm font-mono tracking-widest uppercase mb-2">From</p>
                  <p className="text-xl italic">"What should we post?"</p>
                </div>
                
                <div className="w-px h-8 bg-brand-orange ml-4" />
                
                <div>
                  <p className="text-sm font-mono text-brand-orange tracking-widest uppercase mb-2">To</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">"We already have content ready."</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
