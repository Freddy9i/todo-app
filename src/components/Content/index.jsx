import Header from "../Header";
import TodoContainer from "../TodoContainer";
import TodoCreator from "../TodoCreator";
import FilterTodos from "../FilterTodos";
import TodoFooter from "../TodoFooter";

export default function Content() {
  return (
    <div className="fixed top-0 left-0 px-[1.4rem] pt-[2.4rem] w-screen">
      <Header />
      <div className="pt-[1.6rem] flex flex-col gap-4">
        <TodoCreator />
        <TodoContainer />
        <TodoFooter />
        <FilterTodos />
      </div>
    </div>
  );
}
