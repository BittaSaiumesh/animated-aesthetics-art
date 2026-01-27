import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Rocket, GraduationCap } from 'lucide-react';

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
                Hi! I'm <span className="text-coral font-medium">Bitta Saiumesh</span>, an 
                aspiring <span className="text-coral font-medium">Full Stack Developer</span> currently 
                pursuing B.Tech in Computer Science & AI at G. Pullaiah College of Engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have a strong foundation in Java, Python, and web technologies, with hands-on 
                experience in machine learning and deep learning frameworks like TensorFlow and Keras. 
                My recent project, GrainPalette, demonstrates my ability to apply transfer learning 
                for real-world image classification problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about building efficient, scalable applications and continuously 
                expanding my technical and problem-solving skills through internships and bootcamps.
              </p>
            </motion.div>

            {/* Stats/Highlights Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <HighlightCard
                icon={<Code2 className="text-coral" />}
                number="1"
                label="Project Completed"
              />
              <HighlightCard
                icon={<Brain className="text-coral" />}
                number="2"
                label="AI Internships"
              />
              <HighlightCard
                icon={<GraduationCap className="text-coral" />}
                number="8.16"
                label="Current CGPA"
              />
              <HighlightCard
                icon={<Rocket className="text-coral" />}
                number="3"
                label="Certifications"
              />
            </motion.div>
          </div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="font-display text-2xl font-bold text-center mb-8">
              Education Journey
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <EducationCard 
                degree="B.Tech in Computer Science & AI"
                institution="G. Pullaiah College of Engineering And Technology"
                period="Sep 2023 – May 2026"
                cgpa="8.16"
              />
              <EducationCard 
                degree="Diploma in Electrical & Electronics Engineering"
                institution="Brindavan Institute of Technology and Science"
                period="2020 – 2023"
                cgpa="8.3"
              />
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="font-display text-2xl font-bold text-center mb-8">
              My Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                '🤖 Machine Learning',
                '💻 Web Development',
                '🧠 Deep Learning',
                '☕ Java Programming',
                '🐍 Python',
                '📊 Data Science',
                '🔧 Problem Solving',
                '📚 Continuous Learning'
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

const EducationCard = ({
  degree,
  institution,
  period,
  cgpa
}: {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}) => (
  <motion.div
    whileHover={{ x: 5 }}
    className="bg-card p-5 rounded-xl border border-border/50 flex items-start gap-4"
  >
    <div className="w-3 h-3 mt-2 bg-coral rounded-full shrink-0" />
    <div className="flex-1">
      <h4 className="font-display font-bold text-foreground">{degree}</h4>
      <p className="text-sm text-muted-foreground">{institution}</p>
      <div className="flex justify-between mt-2 text-xs">
        <span className="text-coral">{period}</span>
        <span className="text-muted-foreground">CGPA: {cgpa}</span>
      </div>
    </div>
  </motion.div>
);

export default About;
