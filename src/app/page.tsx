'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { 
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowPathRoundedSquareIcon,
  BellAlertIcon 
} from '@heroicons/react/24/outline';

// 加密货币标志组件
const CryptoLogos = {
  Ethereum: () => (
    <svg className="w-full h-full" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
      <path fill="#fff" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/>
      <path fill="#fff" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/>
      <path fill="#fff" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"/>
      <path fill="#fff" d="M127.962 416.905v-104.72L0 236.585z"/>
      <path fill="#fff" d="M127.961 287.958l127.96-75.637-127.96-58.162z"/>
      <path fill="#fff" d="M0 212.32l127.96 75.638v-133.8z"/>
    </svg>
  ),
  Bitcoin: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm6.5 16.5c.3 2-.1 3.5-1.2 4.3-.8.6-1.8.9-3 .9v2.4h-1.6v-2.4c-.4 0-.8 0-1.3 0v2.4h-1.6v-2.4h-2.9v-1.8h.5c.7 0 .9-.3.9-.6v-5.2c0-.3 0-.5-.5-.5h-.9V12h3v0c.5 0 .9 0 1.4 0v-2.4h1.6v2.4c.4 0 .9 0 1.3 0V9.6h1.6V12c2.3.2 4.1 1.2 4.3 3.5-.2 2-1.3 2.9-2.4 3.3 1 .5 1.6 1.4 1.8 2.9zm-1.9-4.5c0-2-3-1.7-3.9-1.7v3.3c.9 0 3.9-.2 3.9-1.7zm.4 4.5c0-2-3.7-1.7-4.3-1.7v3.5c.6 0 4.3-.2 4.3-1.7z"/>
    </svg>
  ),
  BNB: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.977L16 10.139l3.884 3.884L16 17.907zm0 7.419l3.884 3.884 3.884-3.884-3.884-3.884zM13.023 16l-3.884-3.884L5.255 16l3.884 3.884zm9.302-3.884L18.441 16l3.884 3.884L26.209 16z"/>
    </svg>
  ),
  Polygon: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm9.0721 20.0891L21.9917 22.72a.4.4 0 01-.4035.0057l-5.078-2.9235c-.0655-.0378-.1369-.0576-.2102-.0576-.0733 0-.1447.0198-.2102.0576l-5.078 2.9235a.4.4 0 01-.4035-.0057l-3.0804-2.6309a.4.4 0 01-.1435-.4198l1.0519-5.8157a.4.4 0 01.1654-.2424l4.8574-3.3067a.4.4 0 01.4035-.0057l5.078 2.9235c.0655.0378.1369.0576.2102.0576.0733 0 .1447-.0198.2102-.0576l5.078-2.9235a.4.4 0 01.4035.0057l3.0804 2.6309a.4.4 0 01.1435.4198l-1.0519 5.8157a.4.4 0 01-.1654.2424z"/>
    </svg>
  ),
  Solana: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm8.706 10.736L21.93 12.97l-6.022 2.486v3.226l6.022-2.486 2.776 2.234v-7.694zm-17.412 0v7.694l2.776-2.234 6.022 2.486v-3.226l-6.022-2.486-2.776-2.234zm17.412 10.528L21.93 23.5l-6.022 2.486v-3.226l6.022-2.486 2.776-2.234v3.226zm-17.412 0v-3.226l2.776 2.234 6.022 2.486v3.226l-6.022-2.486-2.776-2.234z"/>
    </svg>
  ),
  Cardano: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-2.24 7.88a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm4.48 0a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-8.96 5.12a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm13.44 0a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM16 14.24a1.76 1.76 0 110 3.52 1.76 1.76 0 010-3.52zm-6.72 5.12a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm13.44 0a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-8.96 5.12a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm4.48 0a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
    </svg>
  ),
  Ripple: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.073 18.375a2.327 2.327 0 01-1.927-.902l-4.006 2.306a2.793 2.793 0 01.088.653c0 1.546-1.259 2.804-2.806 2.804-1.547 0-2.806-1.258-2.806-2.804 0-.227.039-.444.088-.653l-4.006-2.306a2.327 2.327 0 01-1.927.902c-1.292 0-2.337-1.044-2.337-2.337 0-1.292 1.045-2.337 2.337-2.337.77 0 1.445.38 1.877.953l4.056-2.337a2.792 2.792 0 01-.088-.653c0-1.546 1.259-2.804 2.806-2.804 1.547 0 2.806 1.258 2.806 2.804 0 .227-.039.444-.088.653l4.006 2.306a2.327 2.327 0 011.927-.902c1.292 0 2.337 1.044 2.337 2.337 0 1.292-1.045 2.337-2.337 2.337z"/>
    </svg>
  ),
  Polkadot: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 6a2 2 0 110 4 2 2 0 010-4zM8 14a2 2 0 110 4 2 2 0 010-4zm16 0a2 2 0 110 4 2 2 0 010-4zm-8 8a2 2 0 110 4 2 2 0 010-4zm-.086-14.086c-4.463 0-8.086 3.623-8.086 8.086s3.623 8.086 8.086 8.086 8.086-3.623 8.086-8.086-3.623-8.086-8.086-8.086zm0 12.129c-2.233 0-4.043-1.81-4.043-4.043s1.81-4.043 4.043-4.043 4.043 1.81 4.043 4.043-1.81 4.043-4.043 4.043z"/>
    </svg>
  ),
  Chainlink: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.086 6.086l-6.4 3.2v13.428l6.4 3.2 6.4-3.2V9.286l-6.4-3.2zm0 3.428l3.2 1.6v8l-3.2 1.6-3.2-1.6v-8l3.2-1.6z"/>
    </svg>
  ),
  Avalanche: () => (
    <svg className="w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.657 22.879l-5.657-9.879-5.657 9.879h11.314zM13.657 9.121L8 19h11.314l-5.657-9.879z"/>
    </svg>
  )
};

// 浮动元素组件
interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingElement = ({ children, className = "", delay = 0 }: FloatingElementProps) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, -5, 5, 0],
    }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-[#2081e2] to-[#3bb2b8] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-gradient-to-l from-[#3bb2b8] to-[#627eea] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-24 md:py-32 text-center">
        {/* 装饰性浮动元素 - 优化小屏幕布局 */}
        <FloatingElement className="left-[2%] md:left-[5%] top-10 md:top-20 w-12 md:w-16 h-12 md:h-16 opacity-20">
          <CryptoLogos.Ethereum />
        </FloatingElement>
        <FloatingElement className="right-[2%] md:right-[8%] top-20 md:top-40 w-10 md:w-12 h-10 md:h-12 opacity-15" delay={1}>
          <CryptoLogos.Bitcoin />
        </FloatingElement>
        <FloatingElement className="left-[8%] md:left-[15%] bottom-10 md:bottom-20 w-12 md:w-14 h-12 md:h-14 opacity-20" delay={2}>
          <CryptoLogos.BNB />
        </FloatingElement>
        <FloatingElement className="right-[10%] md:right-[20%] bottom-20 md:bottom-40 w-8 md:w-10 h-8 md:h-10 opacity-15" delay={1.5}>
          <CryptoLogos.Polygon />
        </FloatingElement>
        <FloatingElement className="left-[15%] md:left-[25%] top-16 md:top-32 w-10 md:w-12 h-10 md:h-12 opacity-20" delay={2.5}>
          <CryptoLogos.Solana />
        </FloatingElement>
        <FloatingElement className="right-[15%] md:right-[30%] top-12 md:top-24 w-12 md:w-14 h-12 md:h-14 opacity-15" delay={3}>
          <CryptoLogos.Cardano />
        </FloatingElement>
        <FloatingElement className="left-[20%] md:left-[35%] bottom-16 md:bottom-32 w-8 md:w-10 h-8 md:h-10 opacity-20" delay={3.5}>
          <CryptoLogos.Ripple />
        </FloatingElement>
        <FloatingElement className="right-[20%] md:right-[40%] top-24 md:top-48 w-10 md:w-12 h-10 md:h-12 opacity-15" delay={4}>
          <CryptoLogos.Polkadot />
        </FloatingElement>
        <FloatingElement className="left-[25%] md:left-[45%] top-8 md:top-16 w-12 md:w-14 h-12 md:h-14 opacity-20" delay={4.5}>
          <CryptoLogos.Chainlink />
        </FloatingElement>
        <FloatingElement className="right-[5%] md:right-[12%] bottom-12 md:bottom-24 w-10 md:w-12 h-10 md:h-12 opacity-15" delay={5}>
          <CryptoLogos.Avalanche />
        </FloatingElement>
        
        {/* 主标题区域 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
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

      {/* Payment Process Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text" data-aos="fade-up">
            支付流程
          </h2>
          <div className="responsive-grid">
            {paymentSteps.map((step, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="glass p-8 rounded-2xl hover-card"
              >
                <div className="flex items-center mb-6">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2081e2] to-[#3bb2b8] flex items-center justify-center mr-4 text-lg font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold gradient-text">{step.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Plan Section */}
      <section className="relative py-20 md:py-32">
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

      {/* Why Choose Us Section */}
      <section className="relative py-20 md:py-32">
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

      {/* CTA Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-16 rounded-3xl max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 gradient-text whitespace-nowrap">
              准备好开始使用了吗?
            </h2>
            <p className="text-lg sm:text-xl mb-8 md:mb-12 text-gray-200 leading-relaxed">
              加入 PayK.AI，体验下一代支付方式
            </p>
            <button className="bg-gradient-to-r from-[#2081e2] via-[#3bb2b8] to-[#627eea] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all flex items-center gap-2 sm:gap-3 mx-auto text-base sm:text-lg group">
              立即开始
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass p-8 rounded-2xl hover-card"
  >
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-[#2081e2] to-[#3bb2b8] rounded-xl">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const paymentSteps = [
  {
    title: "支付发起",
    description: "通过扫描收款码或手动输入，快速发起跨链支付",
  },
  {
    title: "交易创建",
    description: "系统自动生成支付请求，包含所有必要的交易信息",
  },
  {
    title: "交易提交",
    description: "用户确认支付请求，授权发送交易到区块链网络",
  },
  {
    title: "交易传播",
    description: "交易数据被广播到区块链网络节点进行验证",
  },
  {
    title: "交易验证",
    description: "网络节点验证交易有效性，将其记录在区块中",
  },
  {
    title: "交易完成",
    description: "交易确认后，收款方立即收到款项，支付完成",
  }
];

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
