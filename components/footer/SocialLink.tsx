import Link from "next/link";
import { ReactNode, cloneElement } from "react";
import { FaLinkedin } from "react-icons/fa6";

interface SocialLinkProps {
  url: string;
  label: string;
  icon?: JSX.Element;
}
export default function SocialLink({ url, label, icon }: SocialLinkProps) {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="flex w-[85px] items-center gap-1 text-gray-600 dark:text-gray-400"
      >
        {icon && cloneElement(icon, { className: "text-lg" })} {label}
      </Link>
    </>
  );
}
