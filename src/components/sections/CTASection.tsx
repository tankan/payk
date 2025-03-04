import { m } from '../AnimationLayout';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1
          }}
          whileHover={{ scale: 1.02 }}
          className="glass p-6 sm:p-8 md:p-16 rounded-3xl max-w-4xl mx-auto text-center overflow-hidden relative group"
          style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'subpixel-antialiased',
            transform: 'translate3d(0,0,0)'
          }}
        >
          {/* 背景光效 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2081e2]/10 via-[#3bb2b8]/10 to-[#627eea]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* 内容区域 */}
          <div className="relative z-10">
            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-8 gradient-text"
            >
              准备好了吗？
            </m.h2>
            <m.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl mb-6 md:mb-12 text-gray-200 leading-relaxed"
            >
              加入 PayK.AI，体验下一代支付方式
            </m.p>
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <m.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="bg-gradient-to-r from-[#2081e2] via-[#3bb2b8] to-[#627eea] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base md:text-lg group relative overflow-hidden"
              >
                <span className="relative z-10">立即开始</span>
                <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                {/* 按钮悬停效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3bb2b8] via-[#627eea] to-[#2081e2] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </m.button>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}; 