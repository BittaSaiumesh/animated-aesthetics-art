import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Briefcase, Heart } from 'lucide-react';

const Hero = () => {
  const nameLetters = "Alex Chen".split("");
  const roleWords = ["Frontend Developer", "&", "UI Designer"];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-coral/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-navy/5 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-coral/5 blur-2xl"
        />
        
        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-20 w-16 h-16 border-2 border-coral/20 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-20 w-12 h-12 border-2 border-navy/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-coral font-medium mb-4 tracking-wide text-sm uppercase"
            >
              Available for Freelance Work
            </motion.p>

            {/* Name with letter animation */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            {/* Role */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {roleWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className={`text-xl md:text-2xl font-display ${
                    word === '&' ? 'text-coral' : 'text-muted-foreground'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Crafting beautiful, intuitive digital experiences with clean code and 
              pixel-perfect design. Passionate about animation, accessibility, and 
              creating things that make people smile.
            </motion.p>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <QuickFact icon={<MapPin size={16} />} text="San Francisco, CA" />
              <QuickFact icon={<Briefcase size={16} />} text="5+ Years Exp" />
              <QuickFact icon={<Heart size={16} />} text="Open Source" />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-glow transition-all duration-300"
              >
                Explore My Work
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={18} />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>

          {/* Profile Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-4 border-2 border-dashed border-coral/30 rounded-full"
              />
              
              {/* Avatar container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-accent p-1 shadow-glow">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -left-4 top-1/4 glass px-4 py-2 rounded-full shadow-md"
              >
                <span className="text-sm font-medium">React Expert</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
                className="absolute -right-4 bottom-1/4 glass px-4 py-2 rounded-full shadow-md"
              >
                <span className="text-sm font-medium">✨ UI Lover</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-coral rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const QuickFact = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm">
    <span className="text-coral">{icon}</span>
    <span className="text-muted-foreground">{text}</span>
  </div>
);

export default Hero;
