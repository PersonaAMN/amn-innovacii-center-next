import Image from "next/image";
import Link from "next/link";

const Contacts = () => {
  return (
    <article className="flex items-center flex-col">
      <h2>Контакты</h2>
      <p>г. Екатеринбург</p>
      <p>Телефон: +7 343 271 52 20</p>
      <p>Email: amn_persona@mail.ru</p>
      <p>ООО «АМН-Инновации»</p>
      <p>620014 г.Екатеринбург, </p>
      <p>пр-кт Ленина, д.22-а</p>
      <span>Связаться с нами</span>
      <Link
        className="inline-block border border-gray-300 rounded p-2"
        href={"/contacts/form"}
      >
        <Image
          src="/contactWith.svg"
          alt="Связаться с нами"
          width={32}
          height={32}
        />
      </Link>
    </article>
  );
};

export default Contacts;
