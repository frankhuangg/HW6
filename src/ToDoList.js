import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./ToDoListItem";
import NewTodoForm from "./ToDoForm";
import uuid from "react-uuid";
import './ToDoList.css';
function TodoList() {
  const [todos, setTodos] = useState([
     { id: uuid(), task: "task 1", completed: false },
     { id: uuid(), task: "task 2", completed: true }
  ]);

  const create = newTodo => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map(todo => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="TodoList">
      <h1>
        CGU Todo List
      </h1>
      <NewTodoForm createTodo={create} />  
      <ul>{todosList}</ul>
    </div>
  );
}

export default TodoList;