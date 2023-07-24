import SvgLogo from "./assets/logo";

export const Header = () => {
    return (
        <header className="flex justify-between text-[15px] leading-[20px] items-center">
            <span className="pl-16">О нас</span>
            <span>Преподаватели</span>
            {/* <SvgLogo className="h-20 w-20"/> */}
            <span>Программы</span>
            <span className="pr-16">Контакты</span>
            <div className="hidden lg:block text-[25px] leading-[20px]">TestDesktop</div>
        </header>
    );
}