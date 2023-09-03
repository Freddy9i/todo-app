import { useContext } from "react"
import { Context } from "../../Context"

export default function Background() {
  const { theme } = useContext(Context);

  let imageSrc;
  if (theme === "light" && window.innerWidth >= 768) {
    imageSrc = "../../images/bg-desktop-light.jpg";
  } else if (theme === "dark" && window.innerWidth >= 768) {
    imageSrc = "../../images/bg-desktop-dark.jpg";
  } else if (theme === "light" && window.innerWidth < 768) {
    imageSrc = "../../images/bg-mobile-light.jpg";
  } else {
    imageSrc = "../../images/bg-mobile-dark.jpg";
  }

  return (
    <>
      <img
        src={imageSrc}
        className="h-[11.55rem] lg:h-[21.7rem] w-screen object-cover"
      />
      <div
        className={
          (theme === "light" ? "bg-gray-100" : "bg-[#161722]") +
          " h-[calc(100vh-11.55rem)] lg:h-[calc(100vh-21.7rem)]"
        }
      ></div>
    </>
  );
}
