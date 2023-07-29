import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface Props {
    title: string;
}

export const Header = (props: Props) => {
    const CustomButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
        return <button {...props} />;
    }
     

    return (
        <header className="flex justify-between text-[36px] leading-[40px] items-center h-[148px] lg:h-[162px] px-16">
            <span>О нас</span>
            <span>Преподаватели</span>
            <Image src="/logo.jpeg" alt="Учебный центр" width={162} height={162}/>
            <span>Программы</span>
            <span>Контакты</span>
        </header>
    );
}