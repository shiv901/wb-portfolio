import { AiFillLayout } from "react-icons/ai";
import DoCard from "./DoCard";
import { FaServer } from "react-icons/fa";
import { GrTroubleshoot } from "react-icons/gr";
import { MdAutoFixHigh } from "react-icons/md";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="mb-64">
      <h1 className="underlined-heading">What I Do</h1>
      <div className="my-8 grid grid-cols-1 gap-[2rem_3rem] md:grid-cols-2">
        <DoCard
          title="Frontend Wizardry"
          description="Transforming design concepts into pixel-perfect, responsive web
          interfaces using React.js and Next.js. Crafting visually stunning user
          experiences that captivate and engage."
          icon={<AiFillLayout />}
        />
        <DoCard
          title="Backend Brilliance"
          description="Architecting robust and scalable backend systems with Node.js. Building RESTful APIs and integrating databases to power seamless interactions between users and applications."
          icon={<FaServer />}
        />
        <DoCard
          title="Tech Troubleshooting"
          description="Diagnosing and resolving complex technical issues with precision. Leveraging deep knowledge of JavaScript and TypeScript to debug, optimize, and enhance code for peak performance."
          icon={<GrTroubleshoot />}
        />
        <DoCard
          title="Innovative Solutions"
          description="Innovating with cutting-edge technologies to solve real-world problems. Constantly exploring new tools and methodologies to stay ahead of the curve and deliver innovative solutions that exceed expectations."
          icon={<MdAutoFixHigh />}
        />
      </div>
    </section>
  );
}
