import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="relative py-32 px-6 md:px-12 flex items-center justify-center min-h-[70vh] bg-brand-orange text-brand-dark">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none text-white"
        >
          Ready to Make <br/>
          Your Brand Stand Out?
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-brand-dark/90 font-light mb-12 max-w-2xl flex flex-col gap-4"
        >
          <p>Your next great piece of content could be the beginning of something bigger. Whether you have a complete campaign in mind or just an idea you're trying to figure out, let's create it together.</p>
          <p className="font-bold text-white">Let's turn your idea into something people remember.</p>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative px-10 py-5 bg-white text-brand-orange font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-brand-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
            Start a Project <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </motion.button>
      </div>
    </section>
  );
}
