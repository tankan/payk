import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 sm:p-8 md:p-16 rounded-3xl max-w-4xl mx-auto text-center"
          style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'subpixel-antialiased',
            transform: 'translate3d(0,0,0)'
          }}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-8 gradient-text">
            准备好<wbr/>开始使用<wbr/>了吗？
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-12 text-gray-200 leading-relaxed">
            加入 PayK.AI，体验下一代支付方式
          </p>
          <button className="bg-gradient-to-r from-[#2081e2] via-[#3bb2b8] to-[#627eea] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-semibold hover:opacity-90 transition-all flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base md:text-lg group">
            立即开始
            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 