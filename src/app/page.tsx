'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { PaymentProcessSection } from '@/components/sections/PaymentProcessSection';
import { DevelopmentPlanSection } from '@/components/sections/DevelopmentPlanSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      // 添加浏览器兼容性支持
      useClassNames: true,
      easing: 'ease-out-cubic',
      disableMutationObserver: false,
    });
  }, []);

  return (
    <main className="min-h-screen text-white overflow-hidden">
      {/* 背景装饰 - 使用 CSS will-change 优化性能 */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'subpixel-antialiased'
        }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 transform-gpu"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-[#2081e2] to-[#3bb2b8] rounded-full filter blur-3xl opacity-10 animate-pulse transform-gpu"></div>
        <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-gradient-to-l from-[#3bb2b8] to-[#627eea] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000 transform-gpu"></div>
      </div>

      <HeroSection />
      <WhyChooseSection />
      <PaymentProcessSection />
      <DevelopmentPlanSection />
      <CTASection />
    </main>
  );
}
