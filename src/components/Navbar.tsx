import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const links = ['Home', 'About', 'Services', 'Process', 'Contact'];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://res.cloudinary.com/djlvnetvs/image/upload/v1788335195/bbb_yllpgt.png" 
            alt="BrandAd Medias" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-brand-orange transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="group flex items-center gap-2 text-sm font-semibold hover:text-brand-orange transition-colors">
            Let's Talk 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
        >
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-lg font-medium text-white/80 hover:text-brand-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="flex items-center gap-2 text-lg font-semibold text-brand-orange mt-4">
            Let's Talk →
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
