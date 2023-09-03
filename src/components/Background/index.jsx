import { useContext } from "react"
import { Context } from "../../Context"

export default function Background() {
  const { theme } = useContext(Context);

  return (
    <>
      <img 
        src={(theme === "light" ? "/src/images/bg-mobile-light.jpg" : "src/images/bg-mobile-dark.jpg")}
        className=" h-[11.55rem] w-screen object-cover"
      />
      <div className={(theme === "light" ? "bg-gray-100" : "bg-[#161722]") + " h-[calc(100vh-11.55rem)]"}></div>
    </>
  );
}
