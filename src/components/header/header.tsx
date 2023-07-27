import SvgLogo from "./assets/logo";

export const Header = () => {
    return (
        <header className="flex justify-between text-[15px] leading-[20px] items-center h-[60px] lg:h-[68px] px-16">
            <span>О нас</span>
            <span>Преподаватели</span>
            {/* <SvgLogo className="h-20 w-20"/> */}
            <span>Программы</span>
            <span>Контакты</span>
            <div className="hidden lg:block text-[25px] leading-[20px]">TestDesktop</div>
        </header>
    );
}