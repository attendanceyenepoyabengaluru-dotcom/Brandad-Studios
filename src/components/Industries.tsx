import { motion } from 'motion/react';

export default function Industries() {
  const industries = [
    { name: "Restaurants & Cafés", desc: "Turn your food and atmosphere into experiences people want to discover." },
    { name: "Fashion & Retail", desc: "Make your products impossible to scroll past." },
    { name: "Hotels & Hospitality", desc: "Show people what it feels like to experience your brand." },
    { name: "Fitness & Wellness", desc: "Turn energy, transformation and community into content." },
    { name: "Healthcare", desc: "Build trust and communicate your expertise through thoughtful content." },
    { name: "Education", desc: "Give your institution a stronger and more engaging digital presence." },
    { name: "Real Estate", desc: "Present properties, spaces and projects with the impact they deserve." },
    { name: "Startups & Businesses", desc: "Build a visual identity that makes your business look ready for what's next." },
    { name: "Personal Brands", desc: "Turn your knowledge, personality and expertise into a brand people remember." },
  ];

  return (
    <section className="py-32 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6 max-w-2xl"
          >
            Built for Businesses <br/>
            <span className="text-brand-orange">With Something to Say.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 font-light"
          >
            We work with businesses and brands across industries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {industries.map((ind, i) => (
            <motion.div 
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-brand-dark p-8 md:p-10 flex flex-col group hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-4 text-white/90 group-hover:text-brand-orange transition-colors duration-300">
                {ind.name}
              </h3>
              <p className="text-white/50 font-light text-sm leading-relaxed max-w-[90%]">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
