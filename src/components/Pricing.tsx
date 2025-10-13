import { Button } from "./ui/button";
import { Check, ArrowRight, Users, Building, Sparkles } from "lucide-react";

const plans = [
  {
    name: "个人报名",
    icon: Users,
    price: "9,800",
    period: "元/人",
    description: "适合个人学习与技能提升",
    features: [
      "完整6周课程（18+节）",
      "作业点评与反馈",
      "小组辅导答疑",
      "录播回看（1年）",
      "Prompt模板库",
      "项目脚手架代码",
      "结业证书",
      "校友网络",
    ],
    cta: "立即报名",
    highlighted: true,
  },
  {
    name: "团队优惠",
    icon: Users,
    price: "8,500",
    period: "元/人（3人起）",
    description: "团队学习，统一认知框架",
    features: [
      "包含个人版全部权益",
      "团队专属辅导时段",
      "企业场景定制化案例",
      "团队项目协作支持",
      "专属企业社群",
      "可开具增值税发票",
      "灵活付款方式",
    ],
    cta: "咨询团队方案",
    highlighted: false,
  },
  {
    name: "企业内训",
    icon: Building,
    price: "定制",
    period: "按需报价",
    description: "深度定制，匹配企业场景",
    features: [
      "课程内容定制化",
      "企业内部场景案例",
      "可上门授课",
      "长期技术支持",
      "AI战略咨询",
      "内部讲师培养",
      "完整培训体系搭建",
    ],
    cta: "获取企业方案",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1952FF08_1px,transparent_1px),linear-gradient(to_bottom,#1952FF08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1952FF]/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-[#12B886]/10 border border-[#12B886]/20 text-[#12B886] text-sm">
              灵活的报名方案
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">报名与价格</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            选择适合你的学习方式，开启AI实战之旅
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white border-[#1952FF] shadow-[0_20px_60px_rgba(25,82,255,0.3)] scale-105 z-10"
                    : "bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[#1952FF]/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#12B886] to-[#12B886]/80 text-white text-sm rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    最受欢迎
                  </div>
                )}
                
                {/* Background gradient for non-highlighted cards */}
                {!plan.highlighted && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1952FF]/0 to-[#1952FF]/5 opacity-0 hover:opacity-100 transition-opacity" />
                )}
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    plan.highlighted 
                      ? "bg-gradient-to-br from-[#1952FF] to-[#6B8AFF] shadow-[0_8px_20px_rgba(25,82,255,0.3)]" 
                      : "bg-white/10 backdrop-blur-sm"
                  }`}>
                    <Icon className={`h-7 w-7 ${plan.highlighted ? "text-white" : "text-[#1952FF]"}`} />
                  </div>
                  
                  <h3 className={`text-2xl mb-2 ${plan.highlighted ? "text-gray-900" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-600" : "text-slate-400"}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1 mb-1">
                      {plan.price !== "定制" && (
                        <span className={`text-sm ${plan.highlighted ? "text-gray-600" : "text-slate-400"}`}>¥</span>
                      )}
                      <span className={`text-4xl ${
                        plan.highlighted 
                          ? "bg-gradient-to-r from-[#1952FF] to-[#6B8AFF] bg-clip-text text-transparent" 
                          : "text-white"
                      }`}>
                        {plan.price}
                      </span>
                    </div>
                    <span className={`text-sm ${plan.highlighted ? "text-gray-600" : "text-slate-400"}`}>
                      {plan.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlighted ? "bg-[#12B886]/10" : "bg-white/5"
                        }`}>
                          <Check className={`h-3.5 w-3.5 ${
                            plan.highlighted ? "text-[#12B886]" : "text-[#12B886]"
                          }`} />
                        </div>
                        <span className={`text-sm ${plan.highlighted ? "text-gray-700" : "text-slate-300"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full group ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#1952FF] to-[#1952FF]/90 hover:from-[#1952FF]/90 hover:to-[#1952FF] text-white shadow-[0_8px_20px_rgba(25,82,255,0.3)] hover:shadow-[0_8px_30px_rgba(25,82,255,0.4)]"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Check className="h-4 w-4 text-[#12B886]" />
            <p className="text-slate-300 text-sm">
              支持开具增值税发票 · 报名协议可查 · 开班前7天无理由转班
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
