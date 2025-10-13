import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "我没有编程基础，能学会吗？",
    answer: "完全可以！课程分为两条学习路径：非技术人员侧重工具应用和低代码/无代码平台,程序员侧重API开发和Agent框架。我们会根据学员背景提供差异化辅导。",
  },
  {
    question: "课程是线上还是线下？",
    answer: "采用线下小班制授课（汕头），每期限额20人，确保充分互动。同时提供录播回看，支持1年内反复学习。外地学员可咨询线上直播班。",
  },
  {
    question: "结业项目可以用于实际业务吗？",
    answer: "当然！这正是我们的目标。结业项目鼓励学员结合自身业务场景，在导师指导下完成可落地的原型。多位往期学员已将结业项目应用于实际工作或创业。",
  },
  {
    question: "课程会教具体的代码实现吗？",
    answer: "会！程序员学员将学习如何调用OpenAI API、使用LangChain/CrewAI等框架，以及构建RAG和Agent应用。我们提供完整的项目脚手架和代码模板。",
  },
  {
    question: "学完后能达到什么水平？",
    answer: "你将能够：1) 独立评估和选择AI工具；2) 编写高质量Prompt；3) 为业务场景设计AI解决方案；4) 构建完整的AI应用原型；5) 在团队中推动AI落地。",
  },
  {
    question: "如何保证学习效果？",
    answer: "小班制授课+作业点评+项目制输出+导师辅导，四重保障。每周都有实战作业，最后一周全力冲刺结业项目，确保'做出来'而非'听懂了'。",
  },
  {
    question: "课程费用包含哪些？",
    answer: "包含完整6周课程、所有学习资料（模板库、手册、代码）、作业点评、项目辅导、录播回看（1年）、结业证书和校友网络。不含食宿交通。",
  },
  {
    question: "企业团报有什么优惠？",
    answer: "3人及以上享受团队价（8,500元/人），10人以上可定制企业内训方案。企业内训支持内容定制、上门授课和长期技术支持，详情请咨询。",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">常见问题</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            解答你关心的问题
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border rounded-2xl px-6 mb-4 bg-gradient-to-br from-gray-50 to-white">
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
