import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
        <Hero></Hero>
        <Grid></Grid>
        <RecentProjects></RecentProjects>
        <Experience></Experience>
        <Clients></Clients>
        <Approach></Approach>
        <Footer></Footer>
      </div>

    </main>
  );
}
