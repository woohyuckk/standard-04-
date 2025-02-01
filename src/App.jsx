import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";




const storedTodos = JSON.parse(localStorage.getItem("todolist")) || [];


const App = () => {
  // localStorage에 저장되어 있는 todolist 불러오기

  const [todoList, setTodoList] = useState(storedTodos);


  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div>
      <TodoForm setTodoList={setTodoList}></TodoForm>
      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </div>
  );
};

export default App;
