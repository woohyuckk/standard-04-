import { useState } from "react";

const TodoForm = ({ setTodoList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      content,
    };
    setTodoList((prev) => [...prev, newTodo]);
    
    setTitle("")
    setContent("")
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>My Todo List</h1>
      <form
        onSubmit={addTodoHandler}
        style={{
          display: "flex",
          gap: "20px",
          backgroundColor: "lightgrey",
          borderRadius: "10px",
          padding: "20px",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <label style={{ flex: "3" }}>
          제목
          <input
            style={{ boxSizing: "border-box", width: "100%", padding: "10px" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label style={{ flex: "3" }}>
          내용
          <input
            style={{
              boxSizing: "border-box",
              width: "100%",
              padding: "10px",
            }}
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button
          style={{
            flex: "1",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          type="submit"
        >
          추가하기
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
