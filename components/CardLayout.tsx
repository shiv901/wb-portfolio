import { ReactNode } from "react";

export default function CardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container my-12 min-h-[85dvh] overflow-hidden rounded-3xl bg-slate-100 px-10 pt-8 text-slate-950 shadow-2xl drop-shadow-lg  dark:bg-[#222] dark:text-slate-50">
        {children}
      </div>
    </>
  );
}
