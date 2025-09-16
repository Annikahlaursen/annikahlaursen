import SkillSection from "../components/SkillSection";
import ContactSection from "../components/ContactSection";
import MockupSection from "../components/MockupSection";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <SkillSection />
      <MockupSection />
      <ContactSection />
    </div>
  );
}
