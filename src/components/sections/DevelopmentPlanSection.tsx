import { motion } from 'framer-motion';

const developmentSteps = [
  {
    title: "需求分析与规划",
    description: "确定产品核心功能，进行 MVP 需求挖掘与文档起草",
  },
  {
    title: "功能设计与清单整理",
    description: "构建 MVP 功能列表，确保开发方向清晰明确",
  },
  {
    title: "项目搭建与架构设计",
    description: "打造稳定、高效的项目基础架构，为后续开发奠定坚实基础",
  },
  {
    title: "核心服务开发",
    description: "实现核心支付功能，完成跨链交易的技术整合，确保系统安全与可靠性",
  },
  {
    title: "移动应用开发",
    description: "为移动端用户量身打造流畅便捷的操作体验",
  },
  {
    title: "MVP 发布",
    description: "快速推出核心功能版本，获取用户反馈并验证市场需求",
  },
  {
    title: "H5 应用开发",
    description: "打造功能强大、跨平台的新一代 Web 支付体验",
  },
  {
    title: "持续迭代优化",
    description: "根据用户反馈和市场趋势不断优化，提升产品竞争力",
  }
];

export const DevelopmentPlanSection = () => {
  return (
    <section className="relative py-20 md:py-32 section-development section-divider">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text" data-aos="fade-up">
          开发计划
        </h2>
        <div className="space-y-8">
          {developmentSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-2xl hover-card max-w-3xl mx-auto"
              style={{
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'subpixel-antialiased',
                transform: 'translate3d(0,0,0)'
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#2081e2] to-[#3bb2b8] rounded-full flex items-center justify-center text-xl font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 