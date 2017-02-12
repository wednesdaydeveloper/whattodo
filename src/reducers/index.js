import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { ADD_TODO, DEL_TODO } from '../actions';



let currentId = 0;

function createTodo( todo ) {
  return {
    ...todo,
    id: currentId++,
    completed:false,
    createAt: new Date(),
    deleteAt: null,
    detail: "" };
}

const initState = [
  createTodo({ text: 'aaa'}),
  createTodo({ text: 'bbb'}),
  createTodo({ text: 'ccc'}),
  createTodo({ text: 'ddd'}),
];


const todos = handleActions(
  {
    ADD_TODO: (state, action) => {
      return [
        ...state,
        createTodo({text: action.payload})
      ];
    },
    DEL_TODO: (state, action) => {
      return state.map(t =>
          t.id === action.payload ? {...t, completed: true, deleteAt: new Date()} : t
        );
    }
  }, initState);
  

const visibilityFilter = handleActions({
  SET_VISIBILITY_FILTER: (state, action) => {
    return action.payload;
  }
}, 'SHOW_ALL');

export default combineReducers({
  todos,
  visibilityFilter
});