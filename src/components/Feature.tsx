import { m, defaultTransition } from './animations/motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export const Feature = ({ icon, title, description }: FeatureProps) => (
  <m.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    whileHover={{ 
      scale: 1.02,
      transition: {
        ...defaultTransition,
        duration: 0.3
      }
    }}
    className="glass p-8 rounded-2xl hover-card min-h-[180px]"
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