import { useContext } from "react";
import { Context } from "../../Context";

export default function Header() {
    const { theme, toggleTheme } = useContext(Context);

    return (
        <>
        <header className="flex justify-between items-center">
            <h1 className=" font-designFont font-bold text-[1.5rem] tracking-[0.58rem] text-white select-none">TODO</h1>
            <img
                src={(theme === "light" ? "/src/icons/icon-moon.svg" : "/src/icons/icon-sun.svg")}
                className="h-5 w-5 hover:cursor-pointer"
                onClick={() => toggleTheme()}
                />
        </header>
        </>
    );
}