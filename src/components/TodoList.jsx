import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelToDo }) => (
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
        onDelToDo={() => onDelToDo(todo.id)}
        onEditToDo = {() => console.log("onedit")}
      />
    )}
  </ul>
);

export default TodoList;
