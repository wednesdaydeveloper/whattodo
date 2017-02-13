import React from 'react';

const Todo = ({ todo, editingId, onDelToDo, onEditStart, onEditEnd, onChangeTodo }) => {

  let text    = null;
  let detail  = null;

  return (
  <li>
    <div style={{display: editingId === todo.id ? '' : 'none' }}>
			<span>
  			<input type="text" ref={node => text = node} defaultValue={todo.text} />
			</span>
			<span>
			  <label>コメント</label>
  			<input type="text" ref={node => detail = node} defaultValue={todo.detail} />
			</span>
      <button onClick={() => {
        onChangeTodo({id: todo.id, text: text.value, detail: detail.value});
        onEditEnd(todo.id);
      }}>
        OK
      </button>
      <button onClick={() => {
        onEditEnd(todo.id);
      }}>
        キャンセル
      </button>
    </div>
    <div style={{display: editingId !== todo.id ? '' : 'none' }}>
      <button onClick={() => {
        onEditEnd(todo.id);
        onDelToDo(todo.id);
      }}>
        削除
      </button>

      <span onClick={() => onEditStart(todo.id)} style={{textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </div>
  </li>
);

};

export default Todo;