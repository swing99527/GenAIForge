import { Brain, Wrench, Zap, ShoppingBag, Bot, Presentation } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "6周系统路径",
    description: "认知→工具→场景→项目",
    color: "#1952FF",
  },
  {
    icon: Wrench,
    title: "全栈工具实操",
    description: "文本/图像/视频工具：上手即用、选型有据",
    color: "#6B8AFF",
  },
  {
    icon: Zap,
    title: "Prompt工程",
    description: "结构化模板，一次到位",
    color: "#12B886",
  },
  {
    icon: ShoppingBag,
    title: "高频业务场景",
    description: "营销、电商、办公自动化可复制",
    color: "#FFB020",
  },
  {
    icon: Bot,
    title: "RAG & Agent",
    description: "企业级启蒙与实战演练",
    color: "#1952FF",
  },
  {
    icon: Presentation,
    title: "结业路演",
    description: "可展示、可复用、可扩展",
    color: "#12B886",
  },
];

export function CourseHighlights() {
  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">课程亮点</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从理论到实践，从工具到落地，全方位掌握生成式AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#1952FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#1952FF]/10"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${highlight.color}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: highlight.color }} />
                </div>
                
                <h3 className="text-xl mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
