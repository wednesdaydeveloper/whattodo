import { connect } from 'react-redux';
import TodoAdd from '../components/TodoAdd';
import {addTodo} from '../actions/index';


function mapStateToProps(state) {
  return { 
    todos: state.todos,
    group: state.group
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddToDo: (todo) => { 
      dispatch(addTodo(todo));
    },
  };
}


const TodoAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdd);

export default TodoAddContainer;