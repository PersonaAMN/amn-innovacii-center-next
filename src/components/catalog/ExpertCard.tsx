import Image from "next/image";
import { ExpertProps } from "@/types/common.types";
import { experts } from "@/constants";
import { twMerge } from "tailwind-merge";

const ExpertCard = (props: ExpertProps) => {
  return (
    <>
      <figure
        className={twMerge(
          "text-[30px] leading-[40px] text-day-1000 justify-between items-center pb-6 flex flex-col",
          `${props.reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`
        )}
      >
        <Image
          src={props.image || "/doctor.svg"}
          alt={props.name}
          width={300}
          height={300}
        />
        <section className="flex flex-col px-8">
          <figcaption>{props.name}</figcaption>
          <p>{props.degree}</p>
          <p>Специальность: {props.speciality}</p>
          <p>Стаж: {props.experience}</p>
          <p>
            {props.description}
            <span className="text-day-50">Доп.инфо</span>
          </p>
        </section>
      </figure>
    </>
  );
};

const ExpertCardsList = () => {
  return (
    <article className="flex flex-col justify-center items-center">
      <div className="text-[30px] leading-[40px] text-day-1000 flex justify-center py-50">
        Наши преподаватели
      </div>
      <div className="px-16">
        {experts.map((expert, index) => {
          return (
            <ExpertCard key={index} {...expert} reversed={index % 2 !== 0} />
          );
        })}
      </div>
    </article>
  );
};

export default ExpertCardsList;
