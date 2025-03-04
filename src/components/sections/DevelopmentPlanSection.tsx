import { ScrollReveal } from '../ScrollReveal';

const developmentSteps = [
  {
    title: "个人收款场景",
    description: "像发红包一样简单，扫一扫就能完成，让数字货币支付融入日常生活",
    phase: "第一阶段"
  },
  {
    title: "商户收款场景",
    description: "商家扫码即可收款，支持多种数字货币，像微信支付宝一样方便快捷",
    phase: "第二阶段"
  },
  {
    title: "企业支付场景",
    description: "为企业提供一站式支付方案，批量发工资、供应链结算都能轻松搞定",
    phase: "第三阶段"
  }
];

export const DevelopmentPlanSection = () => {
  return (
    <section className="relative py-20 md:py-32 section-development section-divider">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
            产品规划
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
            从个人到企业，让数字货币支付触手可及
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developmentSteps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass p-8 rounded-2xl hover-card relative group overflow-hidden min-h-[240px]">
                {/* 背景光效 */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2081e2]/10 via-[#3bb2b8]/10 to-[#627eea]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-sm text-[#3bb2b8] font-medium mb-3">{step.phase}</span>
                    <div className="w-16 h-16 bg-gradient-to-r from-[#2081e2] to-[#3bb2b8] rounded-full flex items-center justify-center text-2xl font-semibold mb-6">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 gradient-text">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}; 