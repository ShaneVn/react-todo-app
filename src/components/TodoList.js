import React from "react";
import Todo from "./Todo"


const TodoList = ({todos, setTodos, filter}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filter.map(todo=><Todo 
        key={todo.id} 
        text={todo.text} 
        todos={todos} 
        todo ={todo}
        setTodos={setTodos} 
        completed={todo.completed}  />)}
      </ul>
    </div>
  );
};

export default TodoList;
