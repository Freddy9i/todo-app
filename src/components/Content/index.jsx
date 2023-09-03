import Header from "../Header";
import TodoContainer from "../TodoContainer";
import TodoCreator from "../TodoCreator";
import FilterTodos from "../FilterTodos";
import TodoFooter from "../TodoFooter";

export default function Content() {
  return (
    <div className="fixed top-0 left-0 w-screen flex flex-col items-center px-[2.3rem] pt-[2.4rem] lg:pt-[5rem]">
      <Header />
      <div className="w-full pt-[1.6rem] lg:pt-[2rem] flex flex-col items-center gap-2 lg:gap-7">
        <TodoCreator />
        <TodoContainer />
        <TodoFooter />
        <FilterTodos />
      </div>
    </div>
  );
}
