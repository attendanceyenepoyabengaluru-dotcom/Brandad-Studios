import { motion } from 'motion/react';

export default function Philosophy() {
  const actions = [
    "Make someone stop.",
    "Make someone feel.",
    "Make someone remember.",
    "Make someone act."
  ];

  return (
    <section className="py-32 relative bg-brand-orange text-brand-dark overflow-hidden">
      
      {/* Dynamic Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 justify-between items-start">
        
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8"
          >
            Good Content <br/>
            Gets Attention. <br/>
            <span className="text-white">Great Content <br/>Builds Brands.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-light text-brand-dark/80 max-w-md leading-relaxed"
          >
            We don't create content just to fill your feed. We believe every piece of content should do something.
          </motion.p>
        </div>

        <div className="md:w-1/2 flex flex-col gap-12 md:pt-12">
          
          <div className="flex flex-col gap-6">
            {actions.map((action, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center shrink-0 group-hover:bg-brand-dark group-hover:text-brand-orange transition-colors duration-500">
                  <span className="font-mono text-sm">0{i+1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{action}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-brand-dark/20"
          >
            <p className="text-2xl font-light text-brand-dark/70 mb-2">Because views are temporary.</p>
            <p className="text-4xl font-bold">A strong brand stays.</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
