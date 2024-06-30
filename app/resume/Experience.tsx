"use client";
export default function Experience() {
  return (
    <div className="grid grid-cols-4">
      <div className="experience-wrapper col-span-3">
        <h1 className="underlined-heading">Experience</h1>
        <div className="experience my-4 flex items-start gap-4">
          <span className="dates primary-btn text-nowrap px-4 py-1 text-sm">
            2022 - Present
          </span>
          <div className="details">
            <h1 className="font-bold">
              Senior Product Engineer{" "}
              <span className="opacity-70">@Tredence Analytics Solutions</span>
            </h1>
            <p className="text-sm leading-relaxed">
              Translate business concepts into versatile website components
              using Next.js and React.js. Develop and manage SQL databases to
              support web applications. Collaborate with Data Science, Data
              Engineering, Database, and DevOps teams to ensure timely project
              delivery. Lead development efforts and coordinate across
              departments to maintain project alignment and efficiency.
            </p>
            <h2 className="mt-1 text-sm font-medium">Impact & Highlight:</h2>
            <ul className="ml-4 text-sm">
              <li className="list-disc leading-relaxed">
                Successfully <strong>led 3 high-impact</strong> software
                projects, achieving 50% efficiency improvement and earning
                client appreciation.{" "}
              </li>
              <li className="list-disc leading-relaxed">
                Led initiatives resulting in <strong>30% reduction</strong> in
                project completion time while maintaining high coding quality.{" "}
              </li>
              <li className="list-disc leading-relaxed">
                Demonstrated <strong>exceptional guidance</strong> of teams up
                to 6 developers, meeting strict deadlines while maintaining{" "}
                <strong>best coding practices</strong> or team morale.{" "}
              </li>
              <li className="list-disc leading-relaxed">
                Awarded twice for consistently exceeding performance
                expectations.
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="experience flex items-start gap-4">
          <span className="dates primary-btn text-nowrap px-4 py-1 text-sm">
            2022 - Present
          </span>
          <div className="details">
            <h1 className="font-bold">
              Senior Product Engineer{" "}
              <span className="opacity-70">@Tredence Analytics Solutions</span>
            </h1>
            <p className="text-sm leading-relaxed">
              Tredence Analytics Private Ltd specializes in data science
              consulting and analytics solutions for businesses. As a Full Stack
              developer with leadership capabilities, I adept at transforming
              concepts into multifunctional website components, specializing in
              Next.js, React.js, SQL databases, and Azure DevOps.
            </p>
            <h2 className="mt-1 text-sm font-medium">Impact & Highlight:</h2>
            <ul className="ml-4 text-sm">
              <li className="list-disc leading-relaxed">
                Led the successful delivery of three high-impact software
                projects, achieving an average efficiency improvement of 50%
                compared to previous projects, even got appreciation from a
                client.{" "}
              </li>
              <li className="list-disc leading-relaxed">
                Spearheaded process optimizations resulting in a 30% reduction
                in project completion time, showcasing adeptness in maximizing
                productivity while maintaining coding quality standards.{" "}
              </li>
              <li className="list-disc leading-relaxed">
                Demonstrated exceptional leadership under pressure by guiding
                teams to meet strict deadlines, ensuring timely delivery of all
                projects without compromising quality or team morale. Led teams
                of up to 6 developers, fostering collaboration and innovation.{" "}
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="col-span-1">
        <h1 className="underlined-heading">Education</h1>

        <div className="experience my-4 flex items-start gap-4">
          <span className="dates primary-btn text-nowrap px-4 py-1 text-sm">
            2011-2015
          </span>
          <div className="details">
            <h1 className="font-bold">
              Bachelor of Technology <span className="opacity-70">MDU</span>
            </h1>
          </div>
        </div>
        <div className="experience my-4 flex items-start gap-4">
          <span className="dates primary-btn text-nowrap px-4 py-1 text-sm">
            2009-2011
          </span>
          <div className="details">
            <h1 className="font-bold">
              Higher Scooling <span className="opacity-70">HBSE</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
