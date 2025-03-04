import { m } from '../AnimationLayout';
import { CryptoLogos } from '../CryptoLogos';
import { ScrollReveal } from '../ScrollReveal';
import Image from 'next/image';

const tokens = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    image: '/images/tokens/bitcoin.svg',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    image: '/images/tokens/ethereum.svg',
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    image: '/images/tokens/usdt.svg',
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    image: '/images/tokens/bnb.svg',
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    image: '/images/tokens/usdc.svg',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    image: '/images/tokens/solana.svg',
  }
];

export const HeroSection = () => {
  return (
    <section className="relative mx-auto px-4 py-24 md:py-32 text-center section-hero overflow-hidden">
      <ScrollReveal>
        <div className="relative max-w-4xl mx-auto">
          {/* 大型以太坊标志背景 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 -z-10">
            <CryptoLogos.Ethereum />
          </div>
          
          <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-8">
            欢迎使用 PayK.AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed">
            像发微信红包一样，轻松转账各种数字货币
          </p>

          {/* 代币展示区域 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {tokens.map((token, index) => (
              <m.div
                key={token.symbol}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                <div 
                  className="w-28 h-28 sm:w-24 sm:h-24 md:w-20 md:h-20 rounded-3xl glass p-5 sm:p-4 
                           hover:scale-110 transition-transform duration-300 backdrop-blur-sm
                           mx-auto shadow-lg hover:shadow-2xl"
                  style={{
                    willChange: 'transform',
                    transform: 'translate3d(0,0,0)'
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={token.image}
                      alt={token.name}
                      fill
                      sizes="(max-width: 640px) 112px, (max-width: 768px) 96px, 80px"
                      className="object-contain p-1.5"
                      priority={index < 4}
                    />
                  </div>
                </div>
                <span className="block mt-3 text-base font-medium text-gray-400 text-center">
                  {token.symbol}
                </span>
              </m.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};