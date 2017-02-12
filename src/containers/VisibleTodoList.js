import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import VisibilityTypes from '../enum/VisibilityTypes';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityTypes.SHOW_ALL:
      return todos;
    case VisibilityTypes.SHOW_COMPLETED:
      return todos.filter(t => t.deleteAt !== null);
    case VisibilityTypes.SHOW_ACTIVE:
      return todos.filter(t => t.deleteAt === null);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList);

export default VisibleTodoList;