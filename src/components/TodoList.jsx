import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelToDo }) => (
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onDelToDo(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;
