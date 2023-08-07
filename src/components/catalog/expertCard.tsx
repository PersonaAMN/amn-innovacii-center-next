import Image from "next/image";
import { ExpertProps } from "@/types/common.types";
import { experts } from "@/constants";

const Card = (props: ExpertProps) => {
  return (
    <>
      <figure className="text-[30px] leading-[40px] text-day-1000 flex flex-col lg:flex-row justify-between items-center pb-6">
        <Image
          src={props.image || "/doctor.svg"}
          alt={props.name}
          width={300}
          height={300}
          className={`lg:order-${props.order}`}
        />
        <div className="flex flex-col">
          <figcaption>{props.name}</figcaption>
          <div>
            <div>
              <div>{props.degree}</div>
              <div>Специальность: {props.speciality}</div>
              <div>Стаж: {props.experience}</div>
              <div>
                {props.description}
                <span className="text-day-50">Доп.инфо</span>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </>
  );
};

const CardsList = () => {
  return (
    <article className="flex flex-col justify-center items-center">
      <div className="text-[30px] leading-[40px] text-day-1000 flex justify-center py-50">
        Наши преподаватели
      </div>
      <div className="px-16">
        {experts.map((expert, index) => {
          return <Card key={index} {...expert} order={index % 2} />;
        })}
      </div>
    </article>
  );
};

export default CardsList;
