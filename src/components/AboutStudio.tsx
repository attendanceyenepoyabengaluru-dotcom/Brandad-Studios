import { motion } from 'motion/react';

export default function AboutStudio() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8"
            >
              We Make Businesses <br/>
              <span className="text-brand-orange">Look Good Online.</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-6 text-lg text-white/60 font-light max-w-lg leading-relaxed"
            >
              <p>BRANDAD is a creative studio built for businesses that want to communicate better, look better and grow stronger in the digital world.</p>
              <p>We combine <strong className="text-white font-semibold">content creation, production, social media, digital marketing, branding and web</strong> to create complete digital experiences for businesses.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 md:p-16 border border-white/10 rounded-3xl bg-white/[0.02] relative"
          >
            <div className="absolute top-0 right-10 w-px h-16 bg-brand-orange" />
            <div className="absolute top-10 right-0 w-16 h-px bg-brand-orange" />
            
            <h3 className="text-3xl font-bold mb-8">
              Your brand deserves to be seen differently.
            </h3>
            
            <div className="flex flex-col gap-4 text-xl font-light text-white/50">
              <p className="line-through decoration-brand-orange/50">Not louder.</p>
              <p className="line-through decoration-brand-orange/50">Not everywhere.</p>
              <p className="text-3xl font-bold text-brand-orange">Just better.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
