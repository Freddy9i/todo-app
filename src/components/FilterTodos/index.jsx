import { useContext } from "react";
import { Context } from "../../Context";

export default function FilterTodos() {
  const { currentFilter, setCurrentFilter, theme } = useContext(Context);

  return (
    <div className={(theme === "light" ? "bg-white" : "bg-[#25273c]") + " h-12 w-full lg:w-[38.5rem] flex items-center justify-center gap-4 px-4 rounded-md"}>
      <button
        className={
          (currentFilter === "all" ? "text-blue-600" : "text-gray-500") +
          " font-designFont font-bold text-[0.8rem]"
        }
        onClick={() => setCurrentFilter("all")}
      >
        All
      </button>

      <button
        className={
          (currentFilter === "active" ? "text-blue-600" : "text-gray-500") +
          " font-designFont font-bold text-[0.8rem]"
        }
        onClick={() => setCurrentFilter("active")}
      >
        Active
      </button>

      <button
        className={
          (currentFilter === "completed" ? "text-blue-600" : "text-gray-500") +
          " font-designFont font-bold text-[0.8rem]"
        }
        onClick={() => setCurrentFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
