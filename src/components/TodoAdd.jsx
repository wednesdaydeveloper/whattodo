import React from 'react';

const TodoAdd = ({ group, onAddToDo }) => {

	let input;

	const _handleKeyDown = function (ev) {
		if (ev.keyCode === 13) { // Enter の場合のみ
			var newTodo = input.value.trim();
			if (newTodo) {
				onAddToDo({text: newTodo, group: group});
			}
			input.value="";
		}
	};

	return (
		<div>
			<input type="text" ref={node => input = node} onKeyDown={_handleKeyDown} />
		</div>
    );
};

export default TodoAdd;