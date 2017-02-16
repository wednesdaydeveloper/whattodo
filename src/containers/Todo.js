import { connect } from 'react-redux';
import Todo from '../components/Todo';
import {delTodo, editStart, editEnd, changeTodo} from '../actions/index';


function mapStateToProps(state) {
  return {
    editingId: state.editing,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelToDo: (id) => { 
      dispatch(delTodo(id)); 
    },
    onEditStart: (id) => { 
      dispatch(editStart(id));
    },
    onEditEnd: (id) => { 
      dispatch(editEnd(id));
    },
    onChangeTodo: (todo) => { 
      dispatch(changeTodo(todo));
    },
  };
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoContainer;