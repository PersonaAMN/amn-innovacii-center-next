import { extraMaterials, programms } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type ProgrammProps = {
  fileName: string;
  src: string;
  preview: string;
  description?: ReactNode;
};

const ProgrammCard = ({
  fileName,
  src,
  preview,
  description,
}: ProgrammProps) => {
  return (
    <article className="text-[16px] leading-[20px] text-day-1000 justify-center items-center pb-10 px-4 lg:px-8 flex flex-wrap">
      <section className="px-8 lg:max-w-[65%]">
        <h2 className="lg:text-3xl text-xl font-extrabold text-center max-w-5xl py-2">
          {fileName}
        </h2>
        {description && (
          <div className="text-justify space-y-4 indent-8">{description}</div>
        )}
      </section>
      <aside className="py-10 text-center justify-center items-center hover:underline min-w-[25%]">
        <Link href={src} target="_blank">
          {description && "Полный текст программы"}
          <Image src={preview} alt={fileName} width={300} height={300} />
        </Link>
      </aside>
    </article>
  );
};

const ProgrammCardsList = () => {
  return (
    <main className="justify-center items-center">
      <h1 className="text-[30px] leading-[40px] text-day-1000 flex justify-center py-50">
        Образовательная и рабочие программы
      </h1>
      {programms.map((programm, index) => {
        return <ProgrammCard key={`programm-${index}`} {...programm} />;
      })}
      <aside>
        <h2 className="text-[25px] leading-[30px] text-day-1000 flex justify-center py-30">
          Дополнительные материалы
        </h2>
        <div className="lg:grid grid-cols-4">
          {extraMaterials.map((material, index) => {
            return <ProgrammCard key={`material-${index}`} {...material} />;
          })}
        </div>
      </aside>
    </main>
  );
};

export default ProgrammCardsList;
