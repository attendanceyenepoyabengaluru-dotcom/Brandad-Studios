import { motion } from 'motion/react';
import { Video, MousePointerClick, Smartphone, Monitor, Camera, PenTool, Radio, Plus } from 'lucide-react';

export default function Services() {
  const services = [
    { num: "01", title: "Content Creation", subtitle: "Scroll-stopping content designed for today's digital audience.", desc: "From Reels and short-form videos to promotional content and social-first storytelling, we create content that gets attention and keeps your brand relevant.", icon: <Video className="w-6 h-6" /> },
    { num: "02", title: "Video Production", subtitle: "Ideas brought to life through powerful visuals.", desc: "We create promotional videos, brand films, advertisements, product videos, event content and other visual experiences that tell your story.", icon: <Camera className="w-6 h-6" /> },
    { num: "03", title: "Photography", subtitle: "Make your brand look as good as it feels.", desc: "From products and food to people, spaces and experiences, we create photography that captures the details that make your business different.", icon: <Camera className="w-6 h-6" /> },
    { num: "04", title: "Social Media", subtitle: "More than just posting.", desc: "We create strategic and creative social media content that gives your brand a consistent voice, visual identity and presence across platforms.", icon: <Smartphone className="w-6 h-6" /> },
    { num: "05", title: "Digital Marketing", subtitle: "Creative ideas with a purpose.", desc: "We develop digital campaigns and advertising creatives designed to help your business reach the right people and turn attention into action.", icon: <MousePointerClick className="w-6 h-6" /> },
    { num: "06", title: "Web & Digital", subtitle: "Your website is part of your brand.", desc: "We design and develop modern websites and digital experiences that look great, communicate clearly and help businesses connect with their audience.", icon: <Monitor className="w-6 h-6" /> },
    { num: "07", title: "Branding & Design", subtitle: "Build a brand people remember.", desc: "From visual identity and campaign concepts to social creatives and marketing materials, we create designs that give your business a distinctive personality.", icon: <PenTool className="w-6 h-6" /> },
  ];

  return (
    <section id="services" className="py-32 relative bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Everything Your <br className="hidden md:block" />
            Brand Needs to Be Seen.
          </h2>
          <p className="text-brand-orange font-mono text-sm tracking-widest uppercase text-right">
            We bring creative and digital <br className="hidden md:block" />
            services together under one roof.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-pointer overflow-hidden"
            >
              {/* Background hover reveal block */}
              <div className="absolute inset-0 bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out z-0" />
              
              <div className="relative z-10 flex items-center gap-8 md:w-[45%]">
                <span className="text-lg font-mono text-white/30 group-hover:text-white/60 transition-colors">
                  {svc.num}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:text-brand-dark transition-colors duration-300">
                  {svc.title}
                </h3>
              </div>

              <div className="relative z-10 flex flex-col md:w-[55%] mt-6 md:mt-0 gap-2 pr-12">
                <p className="text-lg font-semibold text-white/80 group-hover:text-brand-dark/90 transition-colors duration-300">
                  {svc.subtitle}
                </p>
                <p className="text-sm text-white/50 group-hover:text-brand-dark/70 font-light transition-colors duration-300">
                  {svc.desc}
                </p>
              </div>
              
              <div className="absolute hidden md:block right-6 top-1/2 -translate-y-1/2 z-10 text-white/30 group-hover:text-brand-dark transition-colors duration-300 transform group-hover:scale-110 group-hover:-rotate-12">
                {svc.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
