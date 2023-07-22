import SvgNext from "./assets/logo";

export const Header = () => {
    return (
        <header className="flex items-end">
            <div className="text-[15px] leading-[20px] pr-6">Учебный центр</div>
            <SvgNext className="pl-6"/>
        </header>
    );
}