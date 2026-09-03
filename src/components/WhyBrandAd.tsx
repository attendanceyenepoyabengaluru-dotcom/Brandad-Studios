import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function WhyBrandAd() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  const features = [
    { title: "We Think Beyond One Post", desc: "We don't look at content as individual pieces. We look at how everything works together to build your brand." },
    { title: "We Create With Purpose", desc: "Every concept begins with a reason. We combine creativity with strategy to make content that serves your business." },
    { title: "We Keep It Simple", desc: "From planning to delivery, we take care of the creative process so you can focus on your business." },
    { title: "We Build For Digital", desc: "Today's audience moves fast. We create content designed for the way people actually consume media today." },
    { title: "We Grow With You", desc: "Whether you're launching a new business or taking an established brand to the next level, we're here to build alongside you." },
  ];

  return (
    <section id="why-us" ref={containerRef} className="py-32 relative overflow-hidden bg-brand-dark border-t border-white/5">
      
      {/* Massive Background Typography */}
      <motion.div 
        style={{ y, opacity }}
        className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden"
      >
        <span className="text-[10rem] md:text-[18rem] font-bold tracking-tighter text-white/[0.02] leading-none whitespace-nowrap">
          BRAND AD.
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Image / Visual Balance */}
        <div className="hidden lg:flex items-center justify-center relative">
           <div className="relative w-full h-[700px] rounded-[2rem] overflow-hidden border border-white/10 group">
             <img 
               src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop"
               alt="Creative Strategy"
               className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply pointer-events-none" />
           </div>
        </div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              Creative Thinking. <br/>
              <span className="text-brand-orange">Professional Execution.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-0 border-t border-white/10">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-white/10 py-8 group hover:bg-white/[0.02] transition-colors -mx-6 px-6"
              >
                <div className="text-brand-orange font-mono text-sm whitespace-nowrap shrink-0">
                  [ 0{i + 1} ]
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white/90 group-hover:text-brand-orange transition-colors duration-300">{feat.title}</h3>
                  <p className="text-sm text-white/50 font-light">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
