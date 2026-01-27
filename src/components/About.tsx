import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Coffee } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-coral font-medium text-sm uppercase tracking-wider">
              Get to Know Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Hi there! I'm a passionate <span className="text-coral font-medium">Frontend Developer</span> and 
                <span className="text-coral font-medium"> UI Designer</span> with over 5 years of experience 
                building digital products that users love.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe great design is invisible – it simply works. My approach combines clean, 
                maintainable code with thoughtful user experiences. When I'm not coding, you'll 
                find me exploring new design trends, contributing to open source, or perfecting 
                my pour-over coffee technique.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently working with startups and agencies to bring ideas to life through 
                intuitive interfaces and smooth interactions.
              </p>
            </motion.div>

            {/* Stats/Highlights Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <HighlightCard
                icon={<Code2 className="text-coral" />}
                number="50+"
                label="Projects Completed"
              />
              <HighlightCard
                icon={<Palette className="text-coral" />}
                number="30+"
                label="Happy Clients"
              />
              <HighlightCard
                icon={<Rocket className="text-coral" />}
                number="5+"
                label="Years Experience"
              />
              <HighlightCard
                icon={<Coffee className="text-coral" />}
                number="∞"
                label="Cups of Coffee"
              />
            </motion.div>
          </div>

          {/* Personal Interests */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="font-display text-2xl font-bold text-center mb-8">
              When I'm Not Coding
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                '📸 Photography',
                '🎮 Gaming',
                '🎵 Music',
                '✈️ Travel',
                '📚 Reading',
                '🏃 Running',
                '🎨 Digital Art',
                '☕ Coffee Brewing'
              ].map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-card px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-border/50 cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const HighlightCard = ({ 
  icon, 
  number, 
  label 
}: { 
  icon: React.ReactNode; 
  number: string; 
  label: string;
}) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-card p-6 rounded-2xl shadow-sm border border-border/50 text-center transition-shadow hover:shadow-md"
  >
    <div className="w-12 h-12 mx-auto mb-4 bg-coral/10 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div className="font-display text-3xl font-bold text-foreground mb-1">
      {number}
    </div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);

export default About;
