import { useContext } from "react";
import { Context } from "../../Context";

export default function FilterTodos() {
  const { currentFilter, setCurrentFilter } = useContext(Context);

  return (
    <div className="h-12 flex items-center justify-center gap-6 px-4 bg-white rounded-md">
      <button
        className={
          (currentFilter === "all" ? "text-blue-600" : "") +
          " font-designFont text-[0.8rem]"
        }
        onClick={() => setCurrentFilter("all")}
      >
        All
      </button>

      <button
        className={
          (currentFilter === "active" ? "text-blue-600" : "") +
          " font-designFont text-[0.8rem]"
        }
        onClick={() => setCurrentFilter("active")}
      >
        Active
      </button>

      <button
        className={
          (currentFilter === "completed" ? "text-blue-600" : "") +
          " font-designFont text-[0.8rem]"
        }
        onClick={() => setCurrentFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
