import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="grid min-h-[75dvh] grid-cols-2 place-content-center"
      >
        <div id="image" className="ml-auto px-12">
          <Image
            src="/images/face.jpg"
            width={200}
            height={200}
            alt="my-photo"
            priority={true}
            className="w-auto rounded-full border-[1rem] border-neutral-100 shadow-[0_-5px_14px_10px_#ddd9] dark:border-neutral-600 dark:shadow-[0_0_14px_12px_#0005]"
          />
        </div>
        <div id="hero-about" className="w-4/5 content-center">
          <p className="text-gray-500">Full Stack Developer (MERN)</p>
          <h1 className="my-3 text-5xl font-[600]">Shivansh Raghav</h1>
          <p className="text-sm">
            Experienced <strong>Software Engineer</strong> specializing in
            <strong> React.js, Next.js, and Node.js</strong> with a passion for
            crafting interactive websites. Proficient in JavaScript, TypeScript,
            MUI, HTML, and CSS. Dedicated to continuous learning and adept
            problem-solving.
          </p>
          <div className="action-buttons mt-6">
            <button className="primary-btn mr-4">Download CV</button>
            <button className="secondary-btn">Contact</button>
          </div>
        </div>
      </section>
    </>
  );
}
