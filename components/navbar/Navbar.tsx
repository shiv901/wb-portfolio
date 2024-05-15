import Link from "next/link";
import ThemeSwitch from "../theme/ThemeSwitch";
import NavLinks from "./NavLinks";

const links = [
  { path: "/home", name: "About Me" },
  { path: "/resume", name: "Resume" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

export default function Navbar() {
  return (
    <>
      <nav className="-mx-10 flex justify-between px-10 py-6 shadow-md">
        <div className="logo">
          <div className="inline-block h-10 w-10 rounded-full bg-blue-800 text-center align-middle text-2xl leading-[1.7] text-white">
            S
          </div>{" "}
          <span className="ml-1 text-lg text-slate-950 dark:text-slate-50">
            <strong>Shivansh</strong> Raghav
          </span>
        </div>

        <ul className="nav-links flex items-center gap-10 text-sm font-light text-neutral-800 dark:text-slate-50 ">
          {links.map((link) => (
            <NavLinks key={link.path} path={link.path} name={link.name} />
          ))}
          <ThemeSwitch />
        </ul>
      </nav>
    </>
  );
}
