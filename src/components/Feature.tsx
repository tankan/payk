import { motion } from 'framer-motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Feature = ({ icon, title, description }: FeatureProps) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20
    }}
    style={{
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      WebkitFontSmoothing: 'subpixel-antialiased',
      transform: 'translate3d(0,0,0)'
    }}
    className="glass p-8 rounded-2xl hover-card"
  >
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-[#2081e2] to-[#3bb2b8] rounded-xl">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
); 