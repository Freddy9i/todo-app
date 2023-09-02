import { useContext } from "react";
import { Context } from "../../Context";

export default function Todo({text, state}) {
  const { todos, setTodos } = useContext(Context);

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
    <div className="h-12 flex items-center gap-4 px-4 bg-white border-b-[0.1rem]">
      <img
        src="/src/icons/icon-check.svg"
        className={(state === 'completed' ? "bg-purple-800":"")+" h-[1.1rem] w-[1.1rem] border-[0.1rem] border-gray-600 rounded-full p-1"}
        onClick={() => changeTodoStatus()}
      />
      <p 
        className={(state === 'completed' ? "line-through text-gray-400" : "")+" grow font-designFont text-[0.8rem]"}
      >{text}
      </p>
      <img
        src="/src/icons/icon-cross.svg"
        className="h-[0.7rem] w-[0.7rem]"
        onClick={() => setTodos(todos.filter(todo => todo.text !== text))}
      />
    </div>
  );
}
