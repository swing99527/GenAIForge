import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StudentWork } from "./components/StudentWork";
import { ValueStack } from "./components/ValueStack";
import { CourseHighlights } from "./components/CourseHighlights";
import { Curriculum } from "./components/Curriculum";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { LeadMagnet } from "./components/LeadMagnet";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <Hero />
      <StudentWork />
      <ValueStack />
      <CourseHighlights />
      <Curriculum />
      <Testimonials />
      <LeadMagnet />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
