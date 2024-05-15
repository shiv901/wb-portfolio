import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa6";
import SocialLink from "./SocialLink";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="-mx-10 flex justify-between px-8 py-[0.7rem] text-[12px] shadow-[0_0_10px_7px_#3335] dark:bg-[#222] dark:shadow-[0_0_10px_7px_black]">
      <div className="social-icons flex gap-6">
        <SocialLink
          url="https://github.com/shiv901/"
          label="GitHub"
          icon={<FaGithubSquare />}
        />

        <SocialLink
          url="https://www.linkedin.com/in/shiv901/"
          label="LinkedIn"
          icon={<FaLinkedin />}
        />

        <SocialLink
          url="https://www.leetcode.com/shiv901"
          label="Leet Code"
          icon={<SiLeetcode />}
        />
      </div>
      <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
        <FaRegCopyright /> {new Date().getFullYear()} All rights reserved.
        RsDev.Pro
      </span>
    </div>
  );
}
