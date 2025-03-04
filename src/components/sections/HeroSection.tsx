import { motion } from 'framer-motion';
import { CryptoLogos } from '../CryptoLogos';
import { FloatingElement } from '../FloatingElement';

export const HeroSection = () => {
  return (
    <section className="relative container mx-auto px-4 py-24 md:py-32 text-center section-hero">
      {/* 装饰性浮动元素 - 优化小屏幕布局 */}
      <FloatingElement className="left-[2%] md:left-[5%] top-10 md:top-20 w-12 md:w-16 h-12 md:h-16 opacity-20">
        <CryptoLogos.Ethereum />
      </FloatingElement>
      <FloatingElement className="right-[2%] md:right-[8%] top-20 md:top-40 w-10 md:w-12 h-10 md:h-12 opacity-15" delay={1}>
        <CryptoLogos.Bitcoin />
      </FloatingElement>
      {/* ... 其他浮动元素 */}
      
      {/* 主标题区域 */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          damping: 15,
          stiffness: 100
        }}
        style={{
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'subpixel-antialiased',
          transform: 'translate3d(0,0,0)'
        }}
        className="relative max-w-3xl mx-auto"
      >
        {/* 大型以太坊标志背景 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5 -z-10">
          <CryptoLogos.Ethereum />
        </div>
        
        <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-8">
          欢迎使用 PayK.AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          个人对个人，跨链交易，实时支付，即时通知
        </p>
      </motion.div>
    </section>
  );
}; 