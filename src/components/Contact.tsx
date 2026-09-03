import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Trigger WhatsApp redirect immediately
    const whatsappNumber = "918590324974";
    const text = `Hi, I'm interested in working with you.\n\nName: ${formData.name}\nBusiness: ${formData.businessName || 'N/A'}\nService: ${formData.service || 'N/A'}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      setStatus('success');
      setFormData({ name: '', businessName: '', phone: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
              Let's Create <br/>
              <span className="text-brand-orange">Something.</span>
            </h2>
            <div className="flex flex-col gap-4 text-xl text-white/50 font-light max-w-md">
              <p>Have a business that needs better content?</p>
              <p>Have a campaign you want to bring to life?</p>
              <p>Or simply have an idea you want to explore?</p>
              <p className="font-semibold text-white mt-4">We'd love to hear from you.</p>
            </div>
            
            <div className="mt-12 flex flex-col gap-4">
              <h4 className="text-sm font-mono text-white/50 uppercase tracking-wider">Direct Contact</h4>
              <a href="https://wa.me/918590324974" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-brand-orange transition-colors">
                WhatsApp: +91 8590324974
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-8">Tell us about your project.</h3>
          
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  required
                  className="bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Business Name</label>
                <input 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name" 
                  className="bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Phone / WhatsApp</label>
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your contact number" 
                  className="bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address" 
                  required
                  className="bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <label className="text-sm font-mono text-white/50 uppercase tracking-wider">What are you looking for?</label>
              <div className="flex flex-wrap gap-3">
                {['Content Creation', 'Video Production', 'Photography', 'Social Media', 'Digital Marketing', 'Website', 'Branding & Design', 'Something Else'].map((opt) => (
                  <label key={opt} className="cursor-pointer">
                    <input 
                      type="radio" 
                      name="service" 
                      value={opt}
                      checked={formData.service === opt}
                      onChange={handleChange}
                      className="peer sr-only" 
                    />
                    <span className="inline-block px-4 py-2 border border-white/10 rounded-full text-sm font-light text-white/60 peer-checked:bg-brand-orange peer-checked:text-white peer-checked:border-brand-orange hover:bg-white/5 transition-all">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Tell us about your project *</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="A few words about your business, idea or requirement..." 
                rows={4}
                required
                className="bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-brand-orange transition-colors resize-none"
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="text-green-400 text-sm">Enquiry sent successfully! We will get back to you soon.</div>
            )}
            {status === 'error' && (
              <div className="text-red-400 text-sm">Failed to send enquiry. Please try WhatsApp instead.</div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-white hover:text-brand-dark transition-colors duration-300 disabled:opacity-50 text-center flex items-center justify-center gap-3"
              >
                <span>{status === 'loading' ? 'Sending...' : 'Send Enquiry →'}</span>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
