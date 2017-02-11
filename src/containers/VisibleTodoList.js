import { connect } from 'react-redux';
import { delTodo } from '../actions/index.js';
import TodoList from '../components/TodoList.jsx';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.deleteAt !== null);
    case 'SHOW_ACTIVE':
      return todos.filter(t => t.deleteAt === null);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps =  (dispatch) => ({
  onDelToDo: (id) => dispatch(delTodo(id)),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;