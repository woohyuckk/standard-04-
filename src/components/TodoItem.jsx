const TodoItem = ({todo, deleteTodoHandler, completeTodoHandler, buttonName}) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
      <div>
        <button
          onClick={() => {
            deleteTodoHandler(todo.id);
          }}
        >
          삭제하기
        </button>
        <button
          onClick={() => {
            completeTodoHandler(todo.id);
          }}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
