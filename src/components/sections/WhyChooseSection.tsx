import { FeatureCard } from '../FeatureCard';
import { ScrollReveal } from '../ScrollReveal';
import { QrCodeIcon, ArrowsRightLeftIcon, ShieldCheckIcon, BellIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: "一键扫码支付",
    description: "告别复杂的钱包地址，拿起手机扫一扫，像微信支付一样转账",
    icon: <QrCodeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
  },
  {
    title: "智能匹配路由",
    description: "不用操心币种和汇率，系统自动帮您找到最优惠的兑换方案",
    icon: <ArrowsRightLeftIcon className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400" />
  },
  {
    title: "安全交易保障",
    description: "每笔交易清清楚楚，智能合约全程保护您的资金安全",
    icon: <ShieldCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
  },
  {
    title: "支付即时通知",
    description: "转账进度实时提醒，就像查看快递一样，随时掌握交易状态",
    icon: <BellIcon className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400" />
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="relative py-12 sm:py-20 section-why section-divider">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">
              为什么选择 PayK.AI
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              扫一扫就能转账，像微信支付一样简单安全
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}; 