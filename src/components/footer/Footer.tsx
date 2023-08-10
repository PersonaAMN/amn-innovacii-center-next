import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-screen lg:flex-row gap-5">
      <Link href="/">
        <Image src="/logo.png" alt="Учебный центр" width={162} height={162} />
      </Link>
      <div>
        <p>г. Екатеринбург</p>
        <p>пр-кт Ленина, д.22-а</p>
      </div>
      <Link href="https://t.me/medestetprofi">
        <Image src="/telegram.svg" alt="Учебный центр" width={32} height={32} />
      </Link>
    </footer>
  );
};

export default Footer;
