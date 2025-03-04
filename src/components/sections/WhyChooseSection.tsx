import { 
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowPathRoundedSquareIcon,
  BellAlertIcon 
} from '@heroicons/react/24/outline';
import { Feature } from '../Feature';

export const WhyChooseSection = () => {
  return (
    <section className="relative py-20 md:py-32 section-features section-divider">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text" data-aos="fade-up">
          为什么选择 PayK.AI？
        </h2>
        <div className="responsive-grid">
          <Feature 
            icon={<CurrencyDollarIcon className="w-10 h-10 text-white" />}
            title="高效便捷"
            description="收款码支付自动化操作，避免人为输入出错"
          />
          <Feature 
            icon={<ShieldCheckIcon className="w-10 h-10 text-white" />}
            title="透明安全"
            description="支付状态、交易记录均可实时查询，信息全链记录，公开透明"
          />
          <Feature 
            icon={<ArrowPathRoundedSquareIcon className="w-10 h-10 text-white" />}
            title="跨链支持"
            description="支持多种区块链网络，轻松实现跨链支付"
          />
          <Feature 
            icon={<BellAlertIcon className="w-10 h-10 text-white" />}
            title="实时通知"
            description="支付每一步都有即时消息提示，让您随时掌握进度"
          />
        </div>
      </div>
    </section>
  );
}; 