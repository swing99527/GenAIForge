import { Button } from "./ui/button";
import { Download, ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 pt-24 pb-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1952FF15_1px,transparent_1px),linear-gradient(to_bottom,#1952FF15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1952FF]/5 to-transparent" />
      
      {/* Glowing Orbs - More subtle */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#1952FF] rounded-full blur-[150px] opacity-15" />
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#12B886] rounded-full blur-[130px] opacity-10" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#12B886] rounded-full animate-pulse opacity-40" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#1952FF] rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[#FFB020] rounded-full animate-pulse opacity-25" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1952FF]/20 to-[#12B886]/20 border border-[#1952FF]/30 backdrop-blur-sm mb-8 hover:border-[#1952FF]/50 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12B886] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#12B886]"></span>
            </span>
            <span className="text-white/90">汕头人工智能实验室出品</span>
          </div>
          
          {/* Main Heading with enhanced styling */}
          <div className="mb-8">
            <div className="mb-3">
              <span className="text-xl md:text-2xl text-[#6B8AFF] tracking-wide">GenAI Forge</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent inline-block">
              创智营
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#1952FF] to-transparent rounded-full" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-white">
            6周，从认知到创造
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            从模型与工具，到RAG与Agent<br/>项目制输出，做出可展示的业务原型
          </p>
          
          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-300 mb-12">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-[#12B886] rounded-full shadow-[0_0_8px_rgba(18,184,134,0.5)]" />
              线下汕头·小班制
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-[#12B886] rounded-full shadow-[0_0_8px_rgba(18,184,134,0.5)]" />
              项目导师辅导
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-[#12B886] rounded-full shadow-[0_0_8px_rgba(18,184,134,0.5)]" />
              支持录播回看
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-[#1952FF] to-[#1952FF]/90 hover:from-[#1952FF]/90 hover:to-[#1952FF] text-white px-10 py-7 h-auto group shadow-[0_8px_30px_rgba(25,82,255,0.3)] hover:shadow-[0_8px_40px_rgba(25,82,255,0.4)] transition-all"
            >
              立即报名
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('lead-magnet')}
              className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 px-10 py-7 h-auto transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              下载课程大纲
            </Button>
          </div>
          
          {/* Stats - Enhanced design */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#1952FF]/30 transition-all group">
              <div className="text-4xl md:text-5xl bg-gradient-to-br from-[#12B886] to-[#12B886]/70 bg-clip-text text-transparent mb-2">6周</div>
              <div className="text-sm text-slate-300">系统学习</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#12B886]/0 to-[#12B886]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#1952FF]/30 transition-all group">
              <div className="text-4xl md:text-5xl bg-gradient-to-br from-[#1952FF] to-[#6B8AFF] bg-clip-text text-transparent mb-2">1个</div>
              <div className="text-sm text-slate-300">完整项目</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1952FF]/0 to-[#1952FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#1952FF]/30 transition-all group">
              <div className="text-4xl md:text-5xl bg-gradient-to-br from-[#FFB020] to-[#FFB020]/70 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-sm text-slate-300">满意度</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFB020]/0 to-[#FFB020]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
