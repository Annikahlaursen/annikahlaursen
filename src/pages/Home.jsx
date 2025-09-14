import Header from "../components/Header";
import SkillSection from "../components/SkillSection";
import SkillGrid from "../components/SkillGrid";
import ContactSection from "../components/ContactSection";
import MockupSection from "../components/MockupSection";

export default function Home() {
  return (
    <div>
      <Header />
      <SkillSection />
      <MockupSection />
      <ContactSection />
    </div>
  );
}
