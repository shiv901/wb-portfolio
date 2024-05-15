"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Loading from "../common/Loading";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Loading />;
  }

  if (resolvedTheme === "light") {
    return <FiMoon size={36} onClick={() => setTheme("dark")} />;
  }
  if (resolvedTheme === "dark") {
    return <FiSun size={36} onClick={() => setTheme("light")} />;
  }
}
