import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'GrainPalette – Rice Classification',
    category: 'Project',
    description: 'Built a rice grain classifier using transfer learning (MobileNetV2) to classify 5 types of rice grains with a real-time Streamlit web interface.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    color: 'from-orange-400/20 to-amber-500/20',
  },
  {
    id: 2,
    title: 'AI Internship – SmartInternz',
    category: 'Achievement',
    description: 'Completed AI Internship Program at SmartInternz (SmartBridge) gaining hands-on experience with machine learning and AI technologies.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    color: 'from-blue-400/20 to-purple-500/20',
  },
  {
    id: 3,
    title: 'Deep Learning with TensorFlow',
    category: 'Learning',
    description: 'Exploring neural networks, transfer learning, and computer vision using TensorFlow and Keras frameworks.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    color: 'from-green-400/20 to-teal-500/20',
  },
  {
    id: 4,
    title: 'Full Stack Development Bootcamp',
    category: 'Achievement',
    description: 'Participated in a 6-day intensive Full Stack Development bootcamp at Make Skilled, Hyderabad with a score of 91.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    color: 'from-violet-400/20 to-indigo-500/20',
  },
  {
    id: 5,
    title: 'Java Programming Journey',
    category: 'Learning',
    description: 'Strong foundation in Java programming with certifications from CodeTantra and Eduskills Academy for Full Stack development.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    color: 'from-amber-400/20 to-orange-500/20',
  },
  {
    id: 6,
    title: 'Data Quality Analyst – Rooman Tech',
    category: 'Achievement',
    description: 'AI – Data Quality Analyst Intern at Rooman Technologies, working on data validation and AI quality assurance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    color: 'from-emerald-400/20 to-cyan-500/20',
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-wider">
            Projects & Achievements
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-8" />
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my projects, internships, and continuous learning journey. 
            Building skills one step at a time!
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-accent text-accent-foreground shadow-glow'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <GalleryCard 
                  item={item} 
                  onClick={() => setSelectedItem(item)} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const GalleryCard = ({ 
  item, 
  onClick 
}: { 
  item: GalleryItem; 
  onClick: () => void;
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    onClick={onClick}
    className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-border/50"
  >
    {/* Image */}
    <div className="relative aspect-[4/3] overflow-hidden">
      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Zoom Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center shadow-lg">
          <ZoomIn className="text-coral" size={20} />
        </div>
      </motion.div>
    </div>

    {/* Content */}
    <div className="p-5">
      <span className="text-coral text-xs font-medium uppercase tracking-wider">
        {item.category}
      </span>
      <h3 className="font-display text-lg font-bold mt-1 text-foreground group-hover:text-coral transition-colors">
        {item.title}
      </h3>
    </div>
  </motion.div>
);

const Lightbox = ({ 
  item, 
  onClose 
}: { 
  item: GalleryItem; 
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 backdrop-blur-sm p-4 md:p-8"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="relative bg-card rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors"
      >
        <X size={20} />
      </button>

      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="aspect-square md:aspect-auto">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <span className="text-coral text-sm font-medium uppercase tracking-wider">
            {item.category}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4 text-foreground">
            {item.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center gap-2 text-coral font-medium hover:underline"
          >
            View Details <ExternalLink size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default Gallery;
