import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black-100 overflow-x-hidden">
      <div className="w-full">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <RecentProjects />
        <WorkExperience />
        <Footer />
      </div>
    </div>
  );
}
