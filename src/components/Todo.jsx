import React from 'react';

const Todo = ({ todo, editingId, onDelToDo, onEditStart, onEditEnd, onChangeTodo }) => {

  let text    = null;
  let detail  = null;

	const changeTodo = function (ev) {
    onChangeTodo({id: todo.id, text: text.value, detail: detail.value});
    onEditEnd(todo.id);
	};  

  
	const _handleKeyDown = function (ev) {
		if (ev.keyCode === 13) { // Enter の場合のみ
		  changeTodo(ev);
		}
	};  

  return (
  <li>
    <div style={{display: editingId === todo.id ? '' : 'none' }}>
			<span>
  			<input type="text" ref={node => text = node} defaultValue={todo.text} onKeyDown={_handleKeyDown} />
			</span>
			<span>
			  <label>コメント</label>
  			<input type="text" ref={node => detail = node} defaultValue={todo.detail} onKeyDown={_handleKeyDown} />
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
      <span onClick={() => {
        onEditEnd(todo.id);
        onDelToDo(todo.id);
      }}>
        ◯
        </span>

      <span onClick={() => onEditStart(todo.id)} style={{textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </div>
  </li>
);

};

export default Todo;