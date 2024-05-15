import Link from "next/link";
import ThemeSwitch from "./theme/ThemeSwitch";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between">
        <div className="logo">
          <div className="inline-block h-10 w-10 rounded-full bg-blue-800 text-center align-middle text-2xl leading-[1.7] text-white">
            S
          </div>{" "}
          <span className="ml-1 text-slate-950 dark:text-slate-50">
            <strong>Shivansh</strong> Raghav
          </span>
        </div>

        <ul className="nav-links flex items-center gap-14 text-sm font-light text-neutral-800 dark:text-slate-50 ">
          <Link href="/">About Me</Link>
          <Link href="/about">Resume</Link>
          <Link href="/about">Projects</Link>
          <Link href="/about">Contact</Link>
          <ThemeSwitch />
        </ul>
      </nav>
    </>
  );
}
