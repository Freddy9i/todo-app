import { useContext } from "react";
import { Context } from "../../Context";

export default function TodoFooter() {
  const { todos, setTodos, theme } = useContext(Context);
  const activeTodosAmount = todos.filter(
    (todo) => todo.state === "active"
  ).length;

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => todo.state !== "completed"));
  };

  return (
    <div className={(theme === "light" ? "bg-white" : "bg-[#25273c]") + " h-12 flex items-center justify-between px-4 rounded-md"}>
      <p className={(theme === "light" ? "" : "text-gray-400") + " font-designFont text-[0.8rem]"}>
        {activeTodosAmount} items left
      </p>
      <button
        className="font-designFont text-red-600 text-[0.8rem]"
        onClick={() => deleteCompletedTodos()}
      >
        Clear Completed
      </button>
    </div>
  );
}
