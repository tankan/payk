import { CryptoLogos } from '../CryptoLogos';
import { ScrollReveal } from '../ScrollReveal';
import { TokenCard } from '../TokenCard';

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
              <TokenCard
                key={token.symbol}
                {...token}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};