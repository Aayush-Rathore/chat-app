import {
  Github,
  Instagram,
  Link,
  Mail,
  GlobeLock,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="p-2 md:px-10 md:py-5 transition-all duration-300 flex flex-col gap-3 justify-center items-center fixed w-full bottom-0 bg-secondary">
      <div>
        Copyright © 2024 -{" "}
        <a
          href="https://twitter.com/aayush_r_"
          target="_blank"
          className="underline text-blue-500"
        >
          Aayush Rathore
        </a>
      </div>
      <div>
        <ul className="flex gap-5">
          <li className="hover:text-blue-400">
            <a href="https://twitter.com/aayush_r_" target="_blank">
              <Github />
            </a>
          </li>
          <li className="hover:text-blue-400">
            <a href="https://www.instagram.com/its.03aayu/" target="_blank">
              <Instagram />
            </a>
          </li>
          <li className="hover:text-blue-400">
            <a href="https://bento.me/aayu-r" target="_blank">
              <Link />
            </a>
          </li>
          <li className="hover:text-blue-400">
            <a href="mailto:aayu.r.2003@gmail.com" target="_blank">
              <Mail />
            </a>
          </li>
          <li className="hover:text-blue-400">
            <a
              href="https://portfolio-gamma-seven-29.vercel.app/"
              target="_blank"
            >
              <GlobeLock />
            </a>
          </li>
          <li className="hover:text-blue-400">
            <a href="https://twitter.com/aayush_r_" target="_blank">
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
