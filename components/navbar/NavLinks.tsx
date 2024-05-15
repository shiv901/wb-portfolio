"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  path: string;
  name: string;
};

export default function NavLinks({ path, name }: Props) {
  const pathName = usePathname();
  const isActive =
    path === "/home" ? pathName === "/" : pathName.startsWith(path);

  return (
    <>
      <Link
        href={path === "/home" ? "/" : path}
        className={` opacity-70 transition duration-100 ease-linear hover:opacity-100 md:w-20 ${isActive ? "font-medium opacity-100" : ""}`}
      >
        {name}
      </Link>
    </>
  );
}
