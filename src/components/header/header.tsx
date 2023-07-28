import Image from "next/image";

interface Props {
    title: string;
}

export const Header = (props: Props) => {
    return (
        <header className="flex justify-between text-[15px] leading-[20px] items-center h-[60px] lg:h-[68px] px-16">
            <span>О нас</span>
            <span>Преподаватели</span>
            <Image src="/logo.jpeg" alt="Учебный центр" width={48} height={48}/>
            <span>Программы</span>
            <span>Контакты</span>
            <div>{props.title}</div>
            <div className="hidden lg:block text-[25px] leading-[20px]">TestDesktop</div>
        </header>
    );
}