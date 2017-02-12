import React from 'react';
import TodoContainer from '../containers/Todo';

const TodoList = ({ todos, onDelToDo }) => (
  <ul>
    {todos.map((todo) =>
      <TodoContainer
        key={todo.id}
        todo={todo}
      />
    )}
  </ul>
);

export default TodoList;
