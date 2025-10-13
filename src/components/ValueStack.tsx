import { Check, FileText, Users, Video, Award } from "lucide-react";

const values = [
  {
    icon: FileText,
    title: "系统课程（6周）",
    items: [
      "18+ 节系统课程",
      "作业点评与反馈",
      "小组辅导答疑",
      "录播回看（1年）",
    ],
  },
  {
    icon: Users,
    title: "模板与资源",
    items: [
      "Prompt 工程模板库",
      "RAG 起步手册",
      "Agent 入门清单",
      "项目脚手架代码",
    ],
  },
  {
    icon: Video,
    title: "项目产出",
    items: [
      "完整 Demo 应用",
      "技术方案文档",
      "路演展示机会",
      "导师专业点评",
    ],
  },
  {
    icon: Award,
    title: "证书与推荐",
    items: [
      "结业证书",
      "项目推荐信",
      "校友网络",
      "就业内推机会",
    ],
  },
];

export function ValueStack() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1952FF08_1px,transparent_1px),linear-gradient(to_bottom,#1952FF08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1952FF]/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-[#1952FF]/10 border border-[#1952FF]/20 text-[#6B8AFF] text-sm">
              完整学习路径
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">你将获得</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            完整的学习路径与可落地的实战成果
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1952FF]/40 transition-all duration-300 hover:bg-white/10 group"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1952FF]/0 via-[#1952FF]/5 to-[#12B886]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1952FF] to-[#6B8AFF] flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(25,82,255,0.3)] group-hover:shadow-[0_8px_30px_rgba(25,82,255,0.5)] transition-all group-hover:scale-110 duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl mb-4 text-white">{value.title}</h3>
                  
                  <ul className="space-y-3">
                    {value.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 group-hover:text-slate-200 transition-colors">
                        <Check className="h-5 w-5 text-[#12B886] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
