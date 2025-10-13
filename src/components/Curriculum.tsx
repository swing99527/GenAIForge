import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { BookOpen, Code, Lightbulb, Rocket, Target, Trophy } from "lucide-react";

const curriculum = [
  {
    week: 1,
    icon: Lightbulb,
    title: "生成式AI基础与思维启蒙",
    topics: [
      "新时代的黎明：生成式AI的商业全景",
      "揭秘黑箱：三大核心技术架构（Transformer/Diffusion/GAN）",
      "未来已来：多模态与通用人工智能（AGI）",
    ],
  },
  {
    week: 2,
    icon: Code,
    title: "核心工具与应用实践（上）",
    topics: [
      "文本生成王者之争：主流LLM深度对比",
      "从文本到视觉：AI图像生成工具实战",
      "视频生成的革命：Sora级工具剖析",
    ],
  },
  {
    week: 3,
    icon: Target,
    title: "核心工具与应用实践（下）",
    topics: [
      "提示词工程基础：与AI高效对话的艺术",
      "结构化提示词：CO-STAR等高级框架应用",
      "Prompt模板库构建与优化实战",
    ],
  },
  {
    week: 4,
    icon: BookOpen,
    title: "业务融合与项目实战（上）",
    topics: [
      "营销自动化：构建AI驱动的内容工厂",
      "电商全链路赋能：从选品到客服",
      "办公自动化：重塑企业知识管理与协作",
    ],
  },
  {
    week: 5,
    icon: Rocket,
    title: "业务融合与项目实战（下）",
    topics: [
      "AI应用构建路径选择：API vs 低代码",
      "AI Agent入门：从ReAct到多智能体",
      "结业项目启动：需求分析与技术选型",
    ],
  },
  {
    week: 6,
    icon: Trophy,
    title: "结业项目实战与展示",
    topics: [
      "项目开发冲刺（导师全程支持）",
      "成果展示与路演",
      "项目点评与总结复盘",
    ],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">课程安排</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            6周系统学习，从认知到工具，从场景到项目
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="week-1">
            {curriculum.map((week) => {
              const Icon = week.icon;
              return (
                <AccordionItem key={week.week} value={`week-${week.week}`} className="border rounded-2xl px-6 mb-4 bg-white">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-[#1952FF] flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#1952FF] mb-1">第{week.week}周</div>
                        <div className="text-lg">{week.title}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <ul className="space-y-3 ml-16">
                      {week.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#12B886] mt-2 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
