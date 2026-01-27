import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-coral fill-coral" />
            </motion.span>
            {' '}by Bitta Saiumesh
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} All rights reserved.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ y: -2 }}
            className="text-sm text-muted-foreground hover:text-coral transition-colors"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
