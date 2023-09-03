import { useContext } from "react";
import { Context } from "../../Context";
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid'

export default function Todo({text, state}) {
  const { todos, setTodos, theme } = useContext(Context);

  const changeTodoStatus = () => {
    setTodos(todos.map(todo => {
      if (todo.text === text) {
        return {
          text: todo.text,
          state: todo.state === 'active' ? 'completed' : 'active',
        };
      }
      return todo;
    }));
  } 

  return (
    <div className={(theme === "light" ? "bg-white" : "bg-[#25273c] border-gray-700") + " h-12 flex items-center gap-4 px-4 border-b-[0.1rem]"}>
      <div
        className={
          (state === "completed" ? " bg-blue-600 border-blue-600" : "border-gray-600") +
          " border-[0.1rem] rounded-full p-[0.1rem] hover:cursor-pointer"
        }
      >
        <CheckIcon
          className={(theme === "light" ? "text-white" : "text-[#25273c]") + " h-[0.8rem] w-[0.8rem]"}
          onClick={() => changeTodoStatus()}
        />
      </div>

      <p
        className={
          (theme === "dark" && state === "active"  ? "text-white" : "") + (state === "completed" ? " line-through text-gray-400" : "") +
          " grow font-designFont text-[0.8rem]"
        }
      >
        {text}
      </p>
      <XMarkIcon
        className={(theme === "light" ? "" : "text-gray-500") + " h-[1.2rem] w-[1.2rem] hover:cursor-pointer"}
        onClick={() => setTodos(todos.filter((todo) => todo.text !== text))}
      />
    </div>
  );
}
