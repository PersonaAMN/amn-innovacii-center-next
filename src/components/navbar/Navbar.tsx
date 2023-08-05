"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface Props {
  title: string;
}

export const Navbar = (props: Props) => {
  const CustomButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button disabled={props.disabled} {...props}>
        {props.children}
      </button>
    );
  };

  const handleButtonClick = () => {
    return typeof window === "undefined" ? undefined : console.log("hello");
  };

  return (
    <nav className="flex justify-between text-[36px] leading-[40px] items-center h-[148px] lg:h-[162px] px-16 py-5 border-b border-nav-border gap-4">
      <ul className="flex items-center gap-10">
        <li className="order-2">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Учебный центр"
              width={162}
              height={162}
            />
          </Link>
        </li>
        {NavLinks.map((link, index) => (
          <li key={link.key} className={`order-${index}`}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
