import { Download, FileText } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const overviewParagraphs = [
  "本课程旨在为无任何背景的初学者和程序员构建一个坚实的生成式AI知识框架，通过系统性的理论讲解、主流工具的深度剖析以及贴近真实业务场景的项目实战，帮助学员把前沿AI技术转化为实际商业价值。",
  "课程采用线上线下结合、持续数周的形式，强调动手实践与应用思维，确保学员在结业时既能理解核心概念，也能动手解决真实业务问题。",
];

const outlineModules = [
  {
    part: "第一部分：生成式AI基础与思维启蒙 (Foundations & Mindset)",
    chapter: "章节一：开启新纪元：生成式AI核心概念与商业价值",
    purpose:
      "为零基础学员和程序员揭开生成式AI的神秘面纱，建立对该领域的宏观认知。理解其与传统AI的根本区别，洞察全球市场的商业潜力，并初步建立与AI协作解决问题的思维模式。",
    sessions: [
      {
        title: "AI发展脉络与商业全景",
        format: "理论讲授 + 案例分析",
        points: [
          "从图灵测试的提出及其在现代AI面前的演变与局限性切入，阐明生成式AI为何代表“范式转移”而不是“量变”。",
          "对比判别式AI与生成式AI在目标、技术与应用上的差异，并引用 Andrew Ng 在 Generative AI for Everyone 课程中的“选择题 vs. 开放作文”类比帮助理解。",
          "用最新调研数据展示商业价值：74% 的组织已经在生成式AI项目中看到投资回报，企业在 2024 年的相关投入激增至 138 亿美元，并结合凯傲集团等案例讨论如何从“降本增效”和“价值创造”评估 ROI。",
          "结合“2024 年是实验年，2025 年是起飞年”的行业判断，分析企业从探索到规模化应用的路径。",
        ],
      },
      {
        title: "三大核心技术架构揭秘",
        format: "可视化类比教学 + 动画演示",
        points: [
          "以头脑风暴的类比讲解 Transformer 的自注意力机制，帮助理解 GPT 系列等大语言模型的工作方式。",
          "通过“墨水在水中扩散/时光倒流”的比喻拆解扩散模型（Diffusion Models）的去噪流程。",
          "用“伪画师”与“鉴定师”的对抗故事说明生成对抗网络（GAN）如何通过博弈逼近以假乱真。",
        ],
      },
      {
        title: "未来趋势展望",
        format: "前沿报告解读 + 专家观点分享",
        points: [
          "强调多模态融合是通往通用人工智能（AGI）的必经之路，引用商汤等机构对自主交互能力的判断。",
          "介绍 Agent AI 的兴起与“NVIDIA 物理图灵测试”等概念，展望具身智能的发展。",
          "借鉴 Khan Academy 等实践，倡导将 AI 视作“副驾驶”或“外脑”，在工作流中识别可被增强的环节。",
        ],
      },
    ],
    outcomes: [
      { label: "知识层面", detail: "清晰解释生成式AI的工作原理、核心技术（Transformer、Diffusion、GAN）及其与传统AI的区别。" },
      { label: "视野层面", detail: "了解全球市场规模、商业应用潜力和多模态、AI Agent 等前沿趋势。" },
      { label: "思维层面", detail: "建立将AI作为协作伙伴的“AI协作思维”，能够初步识别业务痛点。" },
    ],
    deliverables: [
      "完成一份个人学习笔记，总结生成式AI的核心概念，并构思一个潜在的商业应用场景。",
    ],
  },
  {
    part: "第二部分：核心工具与应用实践 (Core Tools & Application)",
    chapter: "章节二：主流生成式AI工具平台深度剖析与实操",
    purpose:
      "系统性地掌握当前市场上的文本、图像、音视频生成工具，通过实操了解性能边界、成本构成、适用场景与高效使用技巧，为业务应用和项目开发奠定工具基础。",
    sessions: [
      {
        title: "文本生成模型（LLMs）深度横评",
        format: "平台实操 + 定性评测",
        points: [
          "组织学员亲手测试并对比 GPT-4o、Claude 3.5 Sonnet、Llama 3、Gemini 2.0 等国际顶尖模型，结合统一基准（逻辑推理、代码生成、长文本理解）和 LLM Leaderboard 数据说明性能与成本。",
          "专门介绍月之暗面的 Kimi、智谱 AI 清言、阿里的通义千问、百度的文心一言等国产大模型，分析针对中文语境的优化与在阿里云百炼等平台上的 API 成本。",
          "提供详尽的 API 定价参考（以 $/1M tokens 计算），指导根据性能、速度、成本进行选型，并强调 Claude 3.5 Haiku 在低延迟客服场景中的优势。",
        ],
      },
      {
        title: "AI 图像与视频生成实战",
        format: "工具演示 + 创意工作坊",
        points: [
          "详细演示 Midjourney、Stable Diffusion、DALL·E 3 的核心功能，讲解如何通过精准提示词、风格化参数与 ControlNet 等高级功能控制画面。",
          "对比 OpenAI 的 Sora 在物理世界模拟和 1 分钟高清生成能力上的突破。",
          "解析快手 Kling 可生成 2 分钟视频的优势及其运动与物理效果。",
          "介绍 Luma AI Dream Machine 作为 Sora 的免费替代方案，强调利用镜头语言创作电影级短片。",
        ],
      },
    ],
    outcomes: [
      { label: "技能层面", detail: "熟练操作至少 3-4 款主流生成式AI工具，能够根据任务需求选择并生成符合要求的内容。" },
      { label: "认知层面", detail: "建立对主流模型能力边界、优缺点、成本与适用场景的清晰认知。" },
    ],
    deliverables: [
      "完成一份《主流 LLM 选型指南》，涵盖性能、成本与适用场景的对比分析。",
      "整理个人 AI 作品集，包含 Midjourney/Stable Diffusion 图像作品及 Luma Dream Machine 等生成的视频。",
    ],
  },
  {
    part: "第三部分：提示词工程与高阶控制 (Prompt Engineering)",
    chapter: "章节三：提示词工程核心技巧",
    purpose:
      "专注教授如何设计高效提示词来精准控制 AI 输出，从基础结构到高级框架，帮助学员掌握引导 AI 生成符合业务需求内容的核心能力。",
    sessions: [
      {
        title: "Prompt 基础与原则",
        format: "理论讲解 + 互动练习",
        points: [
          "拆解优秀 Prompt 的构成：角色、指令、上下文、示例、输出格式。",
          "强调编写清晰、具体、无歧义指令的重要性，并解析新加坡 GovTech GPT-4 提示工程大赛案例。",
          "通过大量互动练习掌握零样本、少样本、思维链与角色扮演等基础技巧。",
        ],
      },
      {
        title: "结构化高级框架应用",
        format: "框架拆解 + 模板化实战",
        points: [
          "深度剖析 CO-STAR 框架（Context、Objective、Style、Tone、Audience、Response），提供可复用模板，指导学员设计复杂业务 Prompt。",
          "介绍 CRISPE、RTF 等其他流行框架，鼓励根据任务需求灵活组合。",
          "围绕特定业务场景开展分组 Prompt 设计与优化竞赛，通过同行评审迭代输出质量。",
        ],
      },
    ],
    outcomes: [
      { label: "技能层面", detail: "掌握系统化 Prompt 设计方法论，能独立编写结构清晰、逻辑严谨的高级 Prompt。" },
      { label: "思维层面", detail: "从“提问者”转变为“AI 训练师”，理解 Prompt 设计是在为 AI 设置思维框架与行动指南。" },
    ],
    deliverables: [
      "搭建个人《Prompt 模板库》，覆盖写作、编程、市场分析等场景的 CO-STAR 模板。",
      "完成一份 Prompt 优化报告，记录多轮迭代提升 AI 输出质量的全过程。",
    ],
  },
  {
    part: "第四部分：业务融合与行业方案 (Business Integration & Projects)",
    chapter: "章节四：生成式AI在典型业务场景下的融合应用",
    purpose:
      "将前两部分所学的理论与工具落地到具体商业场景，通过真实案例学习识别业务痛点并设计可落地的 AI 解决方案，实现技术与业务的深度融合。",
    sessions: [
      {
        title: "营销与电商场景深度融合",
        format: "案例研究 + 解决方案蓝图设计",
        points: [
          "剖析梅赛德斯奔驰的智能销售助理与宝洁内部 AI 平台如何构建内容工厂，并实践用 Zapier/Make 连接 LLM API、CRM 与社交媒体形成自动化流程。",
          "学习 GEO 营销案例，理解结合地域文化生成内容提升区域销售的做法。",
          "研究阿里巴巴国际站与亚马逊使用生成式 AI 重构商品信息流程，了解超过 65 万亚马逊卖家通过一张图生成完整商品详情的实践。",
        ],
      },
      {
        title: "办公自动化与知识管理",
        format: "技术方案讲解 + 动手实验",
        points: [
          "构建结合语音转文本与 LLM 摘要能力的会议纪要系统，并演示如何连接 Jira、Trello 等项目管理工具自动生成周报。",
          "重点实践 RAG（检索增强生成）架构，使用 LangChain 将企业文档加载、切分并存入向量数据库，搭建内部知识库问答机器人。",
        ],
      },
    ],
    outcomes: [
      { label: "能力层面", detail: "能够识别营销、电商、办公等流程中的 AI 应用机会，并设计可落地的解决方案。" },
      { label: "经验层面", detail: "通过行业案例理解头部企业如何用生成式 AI 创造商业价值，积累实践经验。" },
    ],
    deliverables: [
      "完成一份《营销自动化工作流设计方案》，使用可视化工具绘制流程图。",
      "实现一个可运行的、基于 RAG 架构的本地知识库问答原型。",
    ],
  },
  {
    part: "第五部分：从创意到落地的项目实战 (Build Your First AI Application)",
    chapter: "章节五：构建你的第一个 AI 应用：从创意到落地",
    purpose:
      "引导学员整合所学技能完成一个从零到一的 AI 应用开发项目，无论通过低/无代码还是 API 定制，最终解决真实业务问题。",
    sessions: [
      {
        title: "构建路径选择与工具对比",
        format: "平台对比分析 + 决策指南",
        points: [
          "针对非程序员与希望快速验证想法的学员，对比 Retool、Bubble、Voiceflow 等低/无代码平台，以及国内的 Coze 所提供的多种构建模式。",
          "面向程序员深度讲解 OpenAI Assistants API 的 Assistant、Thread、Run、Tools 等概念，理解如何实现有状态、可调用外部工具的复杂 Agent。",
          "介绍 LangChain、LlamaIndex、AutoGen、CrewAI 等主流 Agent 开发框架，帮助未来复杂项目做技术选型。",
        ],
      },
      {
        title: "结业项目实战",
        format: "项目指导 + 分组辅导 + 开发冲刺",
        points: [
          "提供智能客服机器人、自动化报告生成器、多智能体内容创作团队等项目选题，结合企业知识库与函数调用能力。",
          "安排为期一周的开发冲刺，讲师与助教全程辅导并提供项目管理建议。",
          "在结课日开展路演，展示功能、技术实现与商业价值，接受讲师与同学评估。",
        ],
      },
    ],
    outcomes: [
      { label: "实践能力", detail: "成功构建并部署第一个完整的生成式 AI 应用（低/无代码或 API 编程）。" },
      { label: "项目经验", detail: "获得端到端 AI 项目开发经验，熟悉从需求分析、技术选型到展示复盘的全流程。" },
      { label: "职业竞争力", detail: "拥有可写入简历、向雇主展示且具商业潜力的 AI 项目作品，显著提升竞争力。" },
    ],
    deliverables: [
      "交付一个可演示、功能完整的生成式 AI 应用。",
      "整理完整的项目文档，包括需求分析、技术架构图、核心代码/流程截图和商业价值分析。",
      "获得一次公开的项目路演经验。",
    ],
  },
] as const;

export function CourseOutline() {
  return (
    <section id="course-outline" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1952FF]/10 text-[#1952FF] text-sm font-medium">
              <FileText className="h-4 w-4" />
              生成式 AI 课程大纲
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">模块化课程蓝图</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              {overviewParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Button asChild className="bg-[#1952FF] hover:bg-[#1545d4] text-white shadow-lg shadow-[#1952FF]/30">
            <a href="/course-outline.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" /> 下载完整 PDF 大纲
            </a>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible defaultValue="module-0" className="space-y-4">
            {outlineModules.map((module, index) => (
              <AccordionItem key={module.part} value={`module-${index}`} className="border rounded-2xl bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-5 text-left text-lg font-medium">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                    <span className="text-[#1952FF] text-sm font-semibold">{module.part}</span>
                    <span className="text-gray-900 text-base sm:text-lg">{module.chapter}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">{module.purpose}</p>

                    <div className="space-y-5">
                      {module.sessions.map((session) => (
                        <div key={session.title} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                            <span className="text-sm text-[#12B886] font-medium">{session.format}</span>
                          </div>
                          <ul className="space-y-2 text-gray-700 leading-relaxed">
                            {session.points.map((point) => (
                              <li key={point} className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1952FF] flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {module.outcomes.map((outcome) => (
                        <div key={outcome.label} className="p-5 rounded-xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(25,82,255,0.08)]">
                          <h4 className="text-sm font-semibold text-[#1952FF] mb-2">{outcome.label}</h4>
                          <p className="text-gray-700 leading-relaxed">{outcome.detail}</p>
                        </div>
                      ))}
                    </div>

                    {module.deliverables?.length ? (
                      <div className="p-5 rounded-xl bg-[#1952FF]/5 border border-[#1952FF]/20">
                        <h4 className="text-sm font-semibold text-[#1952FF] mb-3">产出物</h4>
                        <ul className="space-y-2 text-gray-700 leading-relaxed">
                          {module.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1952FF] flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
