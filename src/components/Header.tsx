import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1952FF] to-[#6B8AFF] flex items-center justify-center shadow-lg group-hover:shadow-[#1952FF]/50 transition-all">
              <span className="text-white text-xl">🔥</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white group-hover:text-[#6B8AFF] transition-colors">创智营</span>
              <span className="text-xs text-[#6B8AFF]">GenAI Forge</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('highlights')} className="text-slate-300 hover:text-white transition-colors text-sm">
              课程亮点
            </button>
            <button onClick={() => scrollToSection('curriculum')} className="text-slate-300 hover:text-white transition-colors text-sm">
              课程安排
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-white transition-colors text-sm">
              报名价格
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-white transition-colors text-sm">
              常见问题
            </button>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('lead-magnet')}
              className="hidden md:inline-flex text-white hover:text-[#1952FF] hover:bg-white/10"
            >
              下载大纲
            </Button>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-[#1952FF] to-[#6B8AFF] hover:from-[#1952FF]/90 hover:to-[#6B8AFF]/90 text-white shadow-lg"
            >
              立即报名
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('highlights')} className="text-slate-300 hover:text-white transition-colors text-sm text-left py-2">
                课程亮点
              </button>
              <button onClick={() => scrollToSection('curriculum')} className="text-slate-300 hover:text-white transition-colors text-sm text-left py-2">
                课程安排
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-white transition-colors text-sm text-left py-2">
                报名价格
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-white transition-colors text-sm text-left py-2">
                常见问题
              </button>
              <button onClick={() => scrollToSection('lead-magnet')} className="text-slate-300 hover:text-white transition-colors text-sm text-left py-2">
                下载大纲
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
