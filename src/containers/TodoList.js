import { connect } from 'react-redux';
import TodoList from '../components/TodoList.jsx';
import {delTodo} from '../actions/index.js';


function mapStateToProps(state) {
  return { todos: state.todos };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelToDo: (id) => { 
      dispatch(delTodo(id)); 
    },
  };
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;