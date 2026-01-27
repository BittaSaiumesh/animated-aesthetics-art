import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setFormState({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/bittasaiumesh', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/bittasaiumesh', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Looking for internship opportunities or want to discuss a project? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">
                Reach Out
              </h3>
              <div className="space-y-4">
                <ContactInfo
                  icon={<Mail className="text-coral" />}
                  label="Email"
                  value="bittasaiumesh@gmail.com"
                  href="mailto:bittasaiumesh@gmail.com"
                />
                <ContactInfo
                  icon={<MapPin className="text-coral" />}
                  label="Location"
                  value="Andhra Pradesh, India"
                />
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-bold mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-foreground hover:bg-coral hover:text-accent-foreground transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Open to Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-6 bg-gradient-accent rounded-2xl text-accent-foreground"
            >
              <h4 className="font-display font-bold text-lg mb-2">
                Open for Internships 🚀
              </h4>
              <p className="text-sm opacity-90 mb-4">
                I'm actively seeking internship opportunities to contribute to impactful projects 
                while expanding my skills in Full Stack Development and AI.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 hover:gap-2 transition-all"
              >
                Download Resume <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-accent text-accent-foreground font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  href?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <span className="text-sm text-muted-foreground">{label}</span>
      {href ? (
        <a 
          href={href} 
          className="block font-medium text-foreground hover:text-coral transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="font-medium text-foreground">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;
