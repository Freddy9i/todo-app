import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { useContext, useRef } from "react";
import { Context } from "../../Context";

export default function TodoCreator() {
  const { todos, setTodos, theme } = useContext(Context);
  const inputRef = useRef();

  const addTodo = () => {
    if (inputRef.current.value !== '') {
      if(todos.find(todo => todo.text === inputRef.current.value)) {
        alert('Todo already exists');
        return;
      }
      else{
        setTodos(todos => [...todos, {
          text: inputRef.current.value,
          state: 'active',
        }]);
      }
    }
  };

  return (
    <div className={(theme === "light" ? "bg-white" : "bg-[#25273c]") + " h-11 lg:h-[4.6rem] w-full lg:w-[38.5rem] flex items-center justify-between gap-4 px-4 rounded-md"}>
        <input 
            ref={inputRef}
            type="text"
            placeholder="Create a new todo..."
            className={(theme === "light" ? "bg-white" : "bg-[#25273c] text-white") + " font-designFont text-[0.8rem] lg:text-[1.4rem] hover:outline-0 w-full"}
        />
        <ArrowRightIcon 
            className={(theme === "light" ? "bg-white" : "text-gray-500") + " h-[1.7rem] lg:h-[2.5rem] w-[1.7rem] lg:w-[2.5rem] rounded-full p-1 hover:cursor-pointer"}
            onClick={() => addTodo()}
        />
    </div>
  );
}