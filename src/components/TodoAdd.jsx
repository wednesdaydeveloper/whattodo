import React from 'react';

export default class TodoAdd extends React.Component {

	handleKeyDown(e) {
		if (e.keyCode === 13) { // Enter の場合のみ
			this._onAddToDo();
		}
	}

	_onAddToDo(){
		var newTodo = this.refs.todo.value.trim();
		if (newTodo) {
			this.props.onAddToDo(newTodo);
		}
		this.refs.todo.value="";
	}
	render () {
		return (
			<div>
				<input type="text" ref="todo" onKeyDown={this.handleKeyDown.bind(this)} />
				<input type="button" value="submit" onClick={this._onAddToDo.bind(this)} />
			</div>
		)
	}
}
