import Header from "../components/Header";
import SkillSection from "../components/SkillSection";
import SkillGrid from "../components/SkillGrid";
import ContactSection from "../components/ContactSection";
import Mockup from "../components/Mockup";

export default function Home() {
  return (
    <div>
      <Header />
      <SkillSection />
      <Mockup />
      <ContactSection />
    </div>
  );
}
