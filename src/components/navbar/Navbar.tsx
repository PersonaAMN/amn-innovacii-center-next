import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="justify-center text-[32px] leading-[40px] items-center px-8 py-5 border-b border-nav-border">
      <ul
        className={`lg:grid grid-flow-col-dense grid-cols-${
          NavLinks.length + 1
        } lg:grid-rows-1`}
      >
        <li
          className={`col-start-${
            NavLinks.length / 2 + 1
          } flex flex-1 justify-center items-center`}
        >
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Учебный центр"
              width={102}
              height={102}
            />
          </Link>
        </li>
        {NavLinks.map((link) => (
          <li
            key={link.key}
            className={`col-start-${link.order} flex items-center justify-center min-w-[18%]`}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
