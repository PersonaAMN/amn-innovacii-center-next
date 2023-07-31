import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface Props {
    title: string;
}

export const Header = (props: Props) => {
    const CustomButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
        return <button disabled={props.disabled} {...props}>{props.children}</button>;
    }

    const handleButtonClick = () => {

        return (
            typeof window === "undefined" ? undefined : console.log("hello")
        );
    }
     

    return (
        <header className="flex justify-between text-[36px] leading-[40px] items-center h-[148px] lg:h-[162px] px-16">
            <CustomButton type="button" disabled={false} className="hello-button" onClick={handleButtonClick}>О нас</CustomButton>
            <CustomButton type="button" disabled={false} className="hello-button" onClick={handleButtonClick}>Преподаватели</CustomButton>
            <Image src="/logo.jpeg" alt="Учебный центр" width={162} height={162}/>
            <CustomButton type="button" disabled={false} className="hello-button" onClick={handleButtonClick}>Программы</CustomButton>
            <CustomButton type="button" disabled={false} className="hello-button" onClick={handleButtonClick}>Контакты</CustomButton>
        </header>
    );
}   