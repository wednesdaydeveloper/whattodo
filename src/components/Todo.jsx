import React from 'react';

const Todo = ({ todo, editingId, onDelToDo, onEditStart, onEditEnd, onChangeTodo }) => {

  let text    = null;
  let detail  = null;
  let t =todo.text;
  
  return (
  <li>
    <div style={{display: editingId === todo.id ? '' : 'none' }}>
			<span>
			  <label>すること</label>
  			<input type="text" ref={node => text = node} />
			</span>
			<span>
			  <label>コメント</label>
  			<input type="text" ref={node => detail = node} />
			</span>
      <button onClick={() => {
        onChangeTodo({id: todo.id, text: text.value, detail: detail.value});
        onEditEnd(todo.id);
      }}>
        OK
      </button>
      <button onClick={() => {
        // text.value  =todo.text;
        // detail.value=todo.detail;
        onEditEnd(todo.id);
      }}>
        キャンセル
      </button>
    </div>
    <div>
      <button onClick={() => onDelToDo(todo.id)}>
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