import Navbar from "@/components/Navbar";
import Approach from "@/sections/Approach";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import ProcessTimeline from "@/sections/ProcessTimeline";
import Projects from "@/sections/Projects";
import Team from "@/sections/Team";

export default function LocaleHomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ProcessTimeline />
        <Team />
        <Approach />
        <Footer />
      </main>
    </div>
  );
}
