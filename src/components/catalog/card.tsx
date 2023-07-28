import Image from 'next/image';

export const Card = () => {
    return (
        <>
        <figure className="text-[15px] leading-[20px] text-day-1000 flex justify-between w-[512px] border border-solid border-day-1000">
            <Image src="/assets/Peretolchina.png" alt="Перетолчина Татьяна Федоровна" width={256} height={256}/>
            <div className='flex flex-col'>
                <figcaption>Перетолчина Татьяна Федоровна</figcaption>
                <div>
                    <div>
                        <div>Доктор медицинских наук, профессор</div>
                        <div>Специальность: врач терапевт, кардиолог, дерматовенеролог, косметолог, диетолог</div>
                        <div>Стаж: более 30 лет</div>
                        <div>Что-нибудь еще?<span className="text-day-50">Доп.инфо</span></div>
                    </div>
                </div>
            </div>
        </figure>
        </>
    )
}
