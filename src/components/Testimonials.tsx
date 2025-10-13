import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "张伟",
    role: "电商运营总监",
    company: "某跨境电商平台",
    content: "6周时间，我们团队搭建了完整的AI营销自动化流程，素材生成效率提升了300%，现在已经在实际业务中使用。",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
  },
  {
    name: "李娜",
    role: "产品经理",
    company: "互联网公司",
    content: "从零基础到能独立构建RAG应用，课程的项目制学习方式让我真正掌握了AI落地的方法论，而不只是概念。",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li",
  },
  {
    name: "王明",
    role: "创业者",
    company: "AI创业公司",
    content: "结业项目直接变成了我们的MVP产品，导师的点评和技术选型建议帮我们少走了很多弯路，非常实战。",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">学员评价</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            他们已经在用AI创造价值
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#1952FF] transition-all duration-300 hover:shadow-xl"
            >
              <Quote className="h-10 w-10 text-[#1952FF] opacity-20 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
