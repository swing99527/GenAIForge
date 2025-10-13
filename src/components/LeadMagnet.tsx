import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Download, FileText, Sparkles, Gift } from "lucide-react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setPhone("");
    }, 3000);
  };

  return (
    <section id="lead-magnet" className="py-24 bg-gradient-to-br from-[#1952FF] via-[#1952FF] to-[#6B8AFF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#12B886]/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Gift className="h-4 w-4 text-[#FFB020]" />
            <span className="text-white text-sm">限时免费领取</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            获取价值 ¥2,980 的学习资料包
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Prompt工程模板 + RAG起步手册 + Agent入门清单 + 项目脚手架
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center justify-center gap-2.5 bg-white text-[#1952FF] hover:bg-white/95 px-10 py-4 rounded-xl transition-all shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:scale-105 group">
                <Download className="h-5 w-5" />
                <span>立即领取资料包</span>
                <Sparkles className="h-4 w-4 text-[#FFB020] group-hover:rotate-12 transition-transform" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1952FF] to-[#6B8AFF] flex items-center justify-center">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  领取学习资料包
                </DialogTitle>
                <DialogDescription>
                  填写信息后，资料包将发送至您的邮箱
                </DialogDescription>
              </DialogHeader>
              
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#12B886] to-[#12B886]/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl mb-2">领取成功！</h3>
                  <p className="text-gray-600">资料包已发送至您的邮箱，请查收</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱地址 *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-input-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">手机号码（可选）</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="138****8888"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-input-background"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-gradient-to-r from-[#1952FF] to-[#6B8AFF] hover:from-[#1952FF]/90 hover:to-[#6B8AFF]/90 shadow-lg">
                      <Download className="mr-2 h-4 w-4" />
                      立即领取
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center">
                    我们尊重您的隐私，不会向第三方分享您的信息
                  </p>
                </form>
              )}
            </DialogContent>
          </Dialog>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            {[
              { name: "Prompt模板库", count: "50+", icon: "📝" },
              { name: "RAG手册", count: "1本", icon: "📚" },
              { name: "Agent清单", count: "1份", icon: "🤖" },
              { name: "代码脚手架", count: "3套", icon: "💻" },
            ].map((item, index) => (
              <div key={index} className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-2xl text-white mb-1">{item.count}</div>
                <div className="text-sm text-white/80">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
