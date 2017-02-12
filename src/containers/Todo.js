import { connect } from 'react-redux';
import Todo from '../components/Todo';
import {delTodo} from '../actions/index';


function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onDelToDo: (id) => { 
      dispatch(delTodo(id)); 
    },
    onEditToDo: (id) => { 
      console.log("onEditToDo"); 
    },
  };
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoContainer;