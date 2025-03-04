'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { DevelopmentPlanSection } from '@/components/sections/DevelopmentPlanSection';
import { CTASection } from '@/components/sections/CTASection';
import { AnimationLayout } from '@/components/AnimationLayout';

export default function Home() {
  return (
    <AnimationLayout>
      <main className="relative min-h-screen text-white">
        {/* 背景装饰 */}
        <div 
          className="fixed inset-0 -z-10 overflow-hidden"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'subpixel-antialiased'
          }}
        >
          <div 
            className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"
            style={{ transform: 'translate3d(0,0,0)' }}
          />
          <div 
            className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-[#2081e2] to-[#3bb2b8] rounded-full filter blur-3xl opacity-10 animate-pulse"
            style={{ transform: 'translate3d(0,0,0)' }}
          />
          <div 
            className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-gradient-to-l from-[#3bb2b8] to-[#627eea] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"
            style={{ transform: 'translate3d(0,0,0)' }}
          />
        </div>

        {/* 内容区域 */}
        <div className="relative z-10">
          <HeroSection />
          <WhyChooseSection />
          <DevelopmentPlanSection />
          <CTASection />
        </div>
      </main>
    </AnimationLayout>
  );
}
