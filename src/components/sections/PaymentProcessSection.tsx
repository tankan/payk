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

export const PaymentProcessSection = () => {
  return (
    <section className="relative py-20 md:py-32 section-payment section-divider">
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
  );
}; 