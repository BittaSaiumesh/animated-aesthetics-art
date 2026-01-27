import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Java', level: 90, color: 'from-coral to-coral-light' },
  { name: 'Python', level: 85, color: 'from-navy to-navy-light' },
  { name: 'HTML / CSS', level: 80, color: 'from-coral to-coral-light' },
  { name: 'TensorFlow / Keras', level: 75, color: 'from-navy to-navy-light' },
  { name: 'MySQL', level: 78, color: 'from-coral to-coral-light' },
  { name: 'C Programming', level: 70, color: 'from-navy to-navy-light' },
];

const tools = [
  { name: 'VS Code', icon: '💻' },
  { name: 'Jupyter Notebook', icon: '📓' },
  { name: 'Streamlit', icon: '🌊' },
  { name: 'Git', icon: '📦' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'scikit-learn', icon: '🔬' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-wider">
            My Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Skills Bars */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display text-2xl font-bold mb-8"
            >
              Technical Skills
            </motion.h3>
            
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Tools & Technologies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display text-2xl font-bold mb-8"
            >
              Tools I Use
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-card p-4 rounded-xl border border-border/50 text-center shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <span className="text-3xl mb-2 block">{tool.icon}</span>
                  <span className="text-sm font-medium text-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Certifications Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-secondary/50 rounded-2xl"
            >
              <h4 className="font-display font-bold text-lg mb-3 text-foreground">
                Certifications 🏆
              </h4>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                <li>• Java Programming – CodeTantra (Mar 2025)</li>
                <li>• Full Stack Development Bootcamp – Make Skilled (Score: 91)</li>
                <li>• Java Full Stack – Eduskills Academy (Nov 2024)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ 
  skill, 
  index, 
  isInView 
}: { 
  skill: Skill; 
  index: number; 
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-muted-foreground text-sm">{skill.level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
