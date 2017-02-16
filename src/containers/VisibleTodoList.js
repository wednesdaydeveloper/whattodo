import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import VisibilityTypes from '../enum/VisibilityTypes';

const visibitityFilter = (todo, visibitity) => {
  switch (visibitity) {
    case VisibilityTypes.SHOW_ALL:
      return true;
    case VisibilityTypes.SHOW_COMPLETED:
      return todo.deleteAt !== null;
    case VisibilityTypes.SHOW_ACTIVE:
      return todo.deleteAt === null;
    default:
      throw new Error('Unknown visibitity: ' + visibitity);
  }
};

const mapStateToProps = (state) => ({
  todos: state.todos.filter(todo => visibitityFilter(todo, state.visibilityFilter) && state.current.filter(todo))
});

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList);

export default VisibleTodoList;