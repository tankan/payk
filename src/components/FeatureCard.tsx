import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div 
      className="bg-gradient-to-br from-[rgba(32,129,226,0.1)] to-[rgba(59,178,184,0.1)] 
                 backdrop-blur-lg rounded-2xl p-6 sm:p-8
                 border border-gray-700/30
                 hover:border-gray-600/50 transition-colors
                 min-h-[200px] sm:min-h-[240px]"
    >
      <div className="flex flex-col h-full">
        {icon && (
          <div className="mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                          bg-gradient-to-br from-blue-500/10 to-teal-500/10 
                          rounded-xl sm:rounded-2xl">
              {icon}
            </div>
          </div>
        )}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">{title}</h3>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
}; 