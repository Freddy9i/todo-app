import { useContext, useRef } from "react";
import { Context } from "../../Context";

export default function TodoCreator() {
  const { todos, setTodos } = useContext(Context);
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
    <div className="h-11 flex items-center gap-4 px-4 bg-white rounded-md">
        <img 
            src="/src/icons/icon-check.svg"
            className="h-[1.1rem] w-[1.1rem] border-[0.1rem] border-gray-600 rounded-full p-1"
            onClick={() => addTodo()}
        />
        <input 
            ref={inputRef}
            type="text"
            placeholder="Create a new todo..."
            className="font-designFont text-[0.8rem] hover:outline-0"
        />
    </div>
  );
}