import Tech from "@/components/Tech";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";
import OptimizedPortfolio from "@/components/OptimizedComponent";

export default function Home() {
  return (
    <div className="bg-black-100 overflow-x-hidden">
      <div className="w-full">
        <OptimizedPortfolio />
        <About />
        <Tech />
        <RecentProjects />
        <WorkExperience />
        <Footer />
      </div>
    </div>
  );
}
