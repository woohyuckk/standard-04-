import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
  const [completedTodos, setCompleteTodos] = useState([]);

  const deleteTodoHandler = (id) => {
    const deletedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedTodoList);
  };
  const deleteTodoHandler2 = (id) => {
    const deletedTodoList = completedTodos.filter((todo) => todo.id !== id);
    setCompleteTodos(deletedTodoList);
  };

  const completeTodoHandler = (id) => {
    const completedTodo = todoList.find((todo) => todo.id === id);
    setCompleteTodos((prev) => [...prev, completedTodo]);
    setTodoList((prev) => [...prev].filter((todo) => todo.id !== id));
  };

  const cancleTodoHandler = (id) => {
    const completedTodo = completedTodos.find((todo) => todo.id === id);
    setTodoList((prev) => [...prev, completedTodo]);
    setCompleteTodos((prev) => [...prev].filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div style={{border : "5px solid red"}}>
        <h3>Working</h3>
        {todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodoHandler={deleteTodoHandler}
              completeTodoHandler={completeTodoHandler}
              buttonName={"완료"}
            />
          );
        })}
      </div>
      <div style={{border : "5px solid blue"}}>
        <h3>Done</h3>
        {completedTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodoHandler={deleteTodoHandler2}
              completeTodoHandler={cancleTodoHandler}
              buttonName={"취소"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
