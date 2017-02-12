import React from 'react';

const TodoAdd = ({ onAddToDo }) => {

	let input;

	const _onAddToDo = function (ev) {
		var newTodo = input.value.trim();
		if (newTodo) {
			onAddToDo(newTodo);
		}
		input.value="";
	};

	const handleKeyDown = function (ev) {
		if (ev.keyCode === 13) { // Enter の場合のみ
			this._onAddToDo();
		}
	};

  return (
		<div>
			<input type="text" ref={node => input = node} onKeyDown={handleKeyDown} />
			<input type="button" value="submit" onClick={_onAddToDo} />
		</div>
    );
};

export default TodoAdd;