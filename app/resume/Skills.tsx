export default function Skills() {
  return (
    <>
      <h1 className="underlined-heading">Skills</h1>
      <ul className="ml-4 grid grid-cols-2 text-sm">
        <li className="my-1 list-disc">
          <strong>Programming Languages:</strong>{" "}
          <p>JavaScript, Typescript, PHP, Python.</p>
        </li>
        <li className="my-1 list-disc">
          <strong>Frontend Technologies:</strong>{" "}
          <p>
            NextJs, ReactJS, Redux, HTML, CSS, MUI, Ant design, Bootstrap, SCSS.
          </p>
        </li>
        <li className="my-1 list-disc">
          <strong>Backend Technologies:</strong>{" "}
          <p>NodeJS, Express, PHP, Postman.</p>
        </li>
        <li className="my-1 list-disc">
          <strong>Databases: </strong>
          <p>MySQL & MongoDB.</p>
        </li>
        <li className="my-1 list-disc">
          <strong>Version Control:</strong> <p>GitHub & SVN.</p>
        </li>
        <li className="my-1 list-disc">
          <strong>Other Skills:</strong>{" "}
          <p>Unit testing, Proficiency in VS Code.</p>
        </li>
        <li className="col-span-2 my-1 list-disc">
          <strong>Professional Skills:</strong>{" "}
          <>
            Strategic planner, creative problem solver, data-driven problem
            solving, coaching & training.
          </>
        </li>
      </ul>
    </>
  );
}
