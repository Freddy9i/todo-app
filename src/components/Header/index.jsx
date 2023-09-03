import { useContext } from "react";
import { Context } from "../../Context";

export default function Header() {
    const { theme, toggleTheme } = useContext(Context);

    return (
        <>
        <header className="w-full lg:w-[38.5rem] flex justify-between items-center">
            <h1 className=" font-designFont font-bold text-[1.5rem] lg:text-[2.9rem] tracking-[0.58rem] lg:tracking-[1rem] text-white select-none">TODO</h1>
            <img
                src={(theme === "light" ? "/public/icon-moon.svg" : "/public/icons/icon-sun.svg")}
                className="h-5 w-5 lg:h-8 lg:w-8 hover:cursor-pointer"
                onClick={() => toggleTheme()}
                />
        </header>
        </>
    );
}