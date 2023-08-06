import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-center text-[36px] leading-[40px] items-center px-16 py-5 border-b border-nav-border">
      <ul className="flex flex-col lg:flex-row grow items-center justify-center gap-5">
        <li className="flex lg:order-1 flex-1 items-center justify-center">
          <Link href="/" className="items-center">
            <Image
              src="/logo.jpeg"
              alt="Учебный центр"
              width={102}
              height={102}
            />
          </Link>
        </li>
        {NavLinks.map((link, index) => (
          <li
            key={link.key}
            className={`flex items-center justify-center min-w-[18%] order-${index}`}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
