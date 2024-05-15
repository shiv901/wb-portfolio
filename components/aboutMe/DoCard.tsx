import { cloneElement } from "react";
import { AiFillLayout } from "react-icons/ai";

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function DoCard({ title, description, icon }: Props) {
  return (
    <div className="flex items-start justify-center gap-2">
      {icon &&
        cloneElement(icon, { className: "mx-4 -mt-6 text-8xl text-blue-700" })}
      <div className="">
        <h1 className="font-[500]">{title}</h1>
        <p className="mt-1 w-11/12 text-[.75rem] font-[400] text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}
