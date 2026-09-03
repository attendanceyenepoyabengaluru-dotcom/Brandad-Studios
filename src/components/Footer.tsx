export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="https://res.cloudinary.com/djlvnetvs/image/upload/v1788335195/bbb_yllpgt.png" 
              alt="BrandAd Medias" 
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-white/50 font-light max-w-sm mb-8">
            Creative content for ambitious businesses.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-brand-orange uppercase tracking-widest">Connect:</span>
            {['Instagram', 'WhatsApp', 'Email'].map((social) => (
              <a key={social} href="#" className="text-sm font-light text-white/50 hover:text-brand-orange transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Categories</h4>
          <ul className="flex flex-col gap-3 text-white/50 font-light text-sm">
            <li><a href="#" className="hover:text-brand-orange transition-colors">Content</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Production</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Social</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Digital</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="flex flex-col gap-3 text-white/50 font-light text-sm">
            <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
            <li><a href="#why-us" className="hover:text-brand-orange transition-colors">Why BrandAd</a></li>
            <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
        <p>© {new Date().getFullYear()} BRANDAD. All rights reserved.</p>
        <p>Built with precision & passion.</p>
      </div>
    </footer>
  );
}
