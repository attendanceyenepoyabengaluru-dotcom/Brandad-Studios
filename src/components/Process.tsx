import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    { num: "01", title: "Discover", desc: "First, we understand your business. Your audience. Your goals. Your personality. Your challenges. Because great content starts with understanding the brand behind it." },
    { num: "02", title: "Plan", desc: "Ideas become a clear creative direction. We develop concepts, content ideas, shot lists and production plans that are aligned with your brand and objectives." },
    { num: "03", title: "Create", desc: "This is where the ideas come to life. Our team handles the production, photography, videography and creative execution to capture everything your brand needs." },
    { num: "04", title: "Refine", desc: "Raw content becomes polished content. We edit, design and refine every piece to make sure it feels intentional, professional and true to your brand." },
    { num: "05", title: "Deliver", desc: "Your content is ready to work. Whether it's for Instagram, advertising, your website or your next campaign, you receive content created for the platforms where your audience lives." },
  ];

  return (
    <section id="process" className="py-32 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
          >
            From Idea <br/> to Impact.
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 flex flex-col gap-20">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group pl-8 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8.5px] top-2 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-orange group-hover:scale-150 transition-transform duration-300" />
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-16 md:items-baseline">
                <div className="md:w-1/4">
                  <span className="font-mono text-sm tracking-widest text-brand-orange uppercase">
                    Phase {step.num}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 group-hover:text-brand-orange transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
                <div className="md:w-3/4 max-w-2xl">
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
