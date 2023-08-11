import { programms } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ProgrammProps = {
  fileName: string;
  src: string;
  preview: string;
  description: ReactNode;
};

const ProgrammCard = ({
  fileName,
  src,
  preview,
  description,
}: ProgrammProps) => {
  return (
    <article className="text-[16px] leading-[20px] text-day-1000 justify-between items-center pb-10 px-16 flex flex-col lg:flex-row">
      <section className="flex flex-col px-8">
        <h2 className="lg:text-3xl text-xl font-extrabold text-center max-w-5xl w-full py-2">
          {fileName}
        </h2>
        <article className="text-justify space-y-4 indent-8">
          {description}
        </article>
      </section>
      <aside className="text-center hover:underline min-w-[25%]">
        <Link href={src} target="_blank">
          Полный текст программы
          <Image src={preview} alt={fileName} width={300} height={300} />
        </Link>
      </aside>
    </article>
  );
};

const ProgrammCardsList = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] leading-[40px] text-day-1000 flex justify-center py-50">
        Образовательная программа и РПД
      </h1>
      {programms.map((programm, index) => {
        return <ProgrammCard key={index} {...programm} />;
      })}
    </main>
  );
};

export default ProgrammCardsList;
