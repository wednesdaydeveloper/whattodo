import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import VisibilityTypes from '../enum/VisibilityTypes';
import GroupTypes from '../enum/GroupTypes';

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case VisibilityTypes.SHOW_ALL:
//       return todos;
//     case VisibilityTypes.SHOW_COMPLETED:
//       return todos.filter(t => t.deleteAt !== null);
//     case VisibilityTypes.SHOW_ACTIVE:
//       return todos.filter(t => t.deleteAt === null);
//     default:
//       throw new Error('Unknown filter: ' + filter);
//   }
// };


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


const groupFilter = (todo, group) => {
  
  switch (group.groupType) {
    case GroupTypes.PROJECT:
      return todo.group.groupId === group.groupId;
    default:
      throw new Error('Unknown group: ' + group);
  }
};

const mapStateToProps = (state) => ({//  todos: getVisibleTodos(state.todos, state.visibilityFilter, state.group)
  todos: state.todos.filter(todo => visibitityFilter(todo, state.visibilityFilter) && groupFilter(todo, state.group))
});

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList);

export default VisibleTodoList;