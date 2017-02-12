import React from 'react';

const TodoAdd = ({ onAddToDo }) => {

	let input;

	const _handleKeyDown = function (ev) {
		if (ev.keyCode === 13) { // Enter の場合のみ
			_onAddToDo(ev);
		}
	};

	const _onAddToDo = function (ev) {
		var newTodo = input.value.trim();
		if (newTodo) {
			onAddToDo(newTodo);
		}
		input.value="";
	};

	return (
		<div>
			<input type="text" ref={node => input = node} onKeyDown={_handleKeyDown} />
			<input type="button" value="submit" onClick={_onAddToDo} />
		</div>
    );
};

export default TodoAdd;