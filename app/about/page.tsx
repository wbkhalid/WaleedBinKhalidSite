import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";

export default function AboutPage() {
  return (
    <main id="main" className="page-main">
      <About />
      <Experience />
      <Education />
    </main>
  );
}
