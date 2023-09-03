import { useContext } from "react";

import { Context } from "../../Context";
import Todo from "../Todo";

export default function TodoContainer() {
  const { todos, currentFilter } = useContext(Context);
  const filteredTodos = todos.filter(todo => {
    if (currentFilter === "all") {
      return true;
    }
    if (currentFilter === "active") {
      return todo.state === "active";
    }
    if (currentFilter === "completed") {
      return todo.state === "completed";
    }
  });

  return (
    <div className="rounded-md w-full lg:w-[38.5rem] max-h-[calc(100vh-22rem)] lg:max-h-[calc(100vh-31rem)] overflow-scroll">
      {
        filteredTodos.map(todo => (
          <Todo 
            key={todo.text}
            text={todo.text}
            state={todo.state}
          />
        ))
      }
    </div>
  );
}
