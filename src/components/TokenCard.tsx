import Image from 'next/image';
import { m, animations } from './animations/motion';

interface TokenCardProps {
  name: string;
  symbol: string;
  image: string;
  delay: number;
}

export const TokenCard = ({ name, symbol, image, delay }: TokenCardProps) => {
  return (
    <m.div
      {...animations.scale}
      transition={{
        ...animations.scale.transition,
        delay
      }}
      className="relative group"
    >
      <div 
        className="w-28 h-28 sm:w-24 sm:h-24 md:w-20 md:h-20 rounded-3xl glass p-5 sm:p-4 
                   hover:scale-110 transition-transform duration-300 backdrop-blur-sm
                   mx-auto shadow-lg hover:shadow-2xl"
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 112px, (max-width: 768px) 96px, 80px"
            className="object-contain p-1.5"
            priority
          />
        </div>
      </div>
      <span className="block mt-3 text-base font-medium text-gray-400 text-center">
        {symbol}
      </span>
    </m.div>
  );
}; 