import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <main>
      <section className="min-h-[70dvh]">
        <div className="header after:content-['Get_in_touch']">Contact</div>

        <h1 className="underlined-heading">How can I help you?</h1>
        <div className="my-10 flex justify-evenly">
          <Link
            href="tel:9990941900"
            className="w-96 rounded-lg bg-[--bg-primary] px-6 py-4 "
          >
            <h3>Contact by Call</h3>
            <span className="my-2 flex gap-4">
              <FaMobileAlt className="text-2xl" />
              +91 999 094 1900
            </span>
          </Link>

          <Link
            href="mailto:shivansh901@gmail.com"
            className="w-96 rounded-lg bg-[--bg-primary] px-6 py-4 "
          >
            <h3>Or By Mail</h3>
            <span className="my-2 flex gap-4">
              <MdEmail className="text-2xl" />
              shivansh901@gmail.com
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
