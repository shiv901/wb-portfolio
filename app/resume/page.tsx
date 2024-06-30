import Link from "next/link";
import Experience from "./Experience";
import Skills from "./Skills";
import Summary from "./Summary";

export default function About() {
  return (
    <main>
      <section className="mb-20 min-h-[70dvh] px-8">
        <div className="header -mx-8">Resume</div>

        <Summary />
        <Skills />
        <Experience />
        <div className="mt-6 text-center">
          <Link href="pdf\Shivansh_CV.pdf" className="primary-btn mr-4">
            Download Full CV
          </Link>
        </div>
      </section>
    </main>
  );
}
