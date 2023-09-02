export default function Header() {
    return (
        <>
        <header className="flex justify-between items-center">
            <h1 className=" font-designFont font-bold text-[1.5rem] tracking-[0.58rem] text-white">TODO</h1>
            <img src="/src/icons/icon-moon.svg" className="h-5 w-5"/>
        </header>
        </>
    );
}