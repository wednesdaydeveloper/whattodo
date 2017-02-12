import React from 'react';

const Todo = ({ onDelToDo, onEditToDo, id, completed, text }) => (
  <li>
    <div>
      <button onClick={() => onDelToDo(id)}>
        削除
      </button>

      <span onClick={onEditToDo} style={{textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
    </div>
  </li>
);

export default Todo;