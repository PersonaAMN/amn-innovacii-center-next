import Image from 'next/image';
import { ExpertProps } from '@/types/common';

export const Card = (props: ExpertProps) => {
    return (
        <>
        <figure className="text-[15px] leading-[20px] text-day-1000 flex justify-between w-[512px] border border-solid border-day-1000">
            <Image src="/assets/Peretolchina.png" alt={props.name} width={256} height={256} className={props.order ? 'order-last' : undefined}/>
            <div className='flex flex-col'>
                <figcaption>{props.name}</figcaption>
                <div>
                    <div>
                        <div>{props.degree}</div>
                        <div>Специальность: {props.speciality}</div>
                        <div>Стаж: {props.experience}</div>
                        <div>{props.description}<span className="text-day-50">Доп.инфо</span></div>
                    </div>
                </div>
            </div>
        </figure>
        </>
    )
}
