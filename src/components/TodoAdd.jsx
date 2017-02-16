import React from 'react';

const TodoAdd = ({ current, onAddToDo }) => {

	let input;

	const _handleKeyDown = function (ev) {
		if (ev.keyCode === 13) { // Enter の場合のみ
			var newTodo = input.value.trim();
			if (newTodo) {
				onAddToDo({text: newTodo, projectId: current.id > 1000 ? current.id : null});
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