import { m } from './AnimationLayout';
import { staggerItemVariants, commonTransition } from './animations/variants';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export const Feature = ({ icon, title, description, index = 0 }: FeatureProps) => (
  <m.div 
    variants={staggerItemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-20%", amount: 0.3 }}
    whileHover={{ 
      scale: 1.02,
      transition: {
        ...commonTransition,
        stiffness: 300,
        damping: 20
      }
    }}
    style={{
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      WebkitFontSmoothing: 'subpixel-antialiased',
      transform: 'translate3d(0,0,0)',
      height: 'auto',
      minHeight: '180px'
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
  </m.div>
); 