import { ImageWithFallback } from "./figma/ImageWithFallback";

const studentWorks = [
  {
    id: 1,
    title: "AI营销素材生成",
    description: "电商产品图 → 10套营销海报",
    imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
  },
  {
    id: 2,
    title: "智能客服机器人",
    description: "企业知识库 → RAG问答系统",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "视频内容自动化",
    description: "脚本 → AI视频 → 批量输出",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "办公自动化报告",
    description: "数据导入 → 自动生成分析报告",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
  },
  {
    id: 5,
    title: "多模态内容创作",
    description: "文本+图像+视频联动生成",
    imageUrl: "https://images.unsplash.com/photo-1520174691701-bc555a3404ca?w=800",
  },
  {
    id: 6,
    title: "Agent工作流",
    description: "多智能体协作完成复杂任务",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
  },
];

export function StudentWork() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">学员作品实例</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            每个项目都是可展示、可复用的真实业务原型
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {studentWorks.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-[#1952FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#1952FF]/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2">{work.title}</h3>
                  <p className="text-sm text-gray-300">{work.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-gray-900">{work.title}</h3>
                <p className="text-sm text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
