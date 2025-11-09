import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0C1024] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl mb-1">创智营</h3>
              <p className="text-sm text-[#6B8AFF]">GenAI Forge</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              汕头人工智能实验室出品，专注于生成式AI技术研究与应用落地，致力于培养具备AI实战能力的专业人才，推动本地产业智能化升级。
            </p>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#1952FF]" />
                <span>广东省汕头市</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#1952FF]" />
                <span>contact@stailab.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#1952FF]" />
                <span>400-xxx-xxxx</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-4">快速链接</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#curriculum" className="hover:text-[#1952FF] transition-colors">课程安排</a></li>
              <li><a href="#pricing" className="hover:text-[#1952FF] transition-colors">报名价格</a></li>
              <li><a href="#faq" className="hover:text-[#1952FF] transition-colors">常见问题</a></li>
              <li><a href="#contact" className="hover:text-[#1952FF] transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="mb-4">学习资源</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#1952FF] transition-colors">课程大纲下载</a></li>
              <li><a href="#" className="hover:text-[#1952FF] transition-colors">免费公开课</a></li>
              <li><a href="#" className="hover:text-[#1952FF] transition-colors">学员作品集</a></li>
              <li><a href="#" className="hover:text-[#1952FF] transition-colors">AI工具导航</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 创智营 GenAI Forge · 汕头人工智能实验室. 保留所有权利.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#1952FF] transition-colors">隐私政策</a>
            <a href="#" className="hover:text-[#1952FF] transition-colors">服务条款</a>
            <a href="#" className="hover:text-[#1952FF] transition-colors">报名协议</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
