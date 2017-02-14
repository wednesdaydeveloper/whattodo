import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { ADD_TODO, DEL_TODO, CHANGE_TODO, ADD_PROJECT } from '../actions';
import VisibilityTypes from '../enum/VisibilityTypes';



let currentTodoId = 0;

function createTodo( todo ) {
  return {
    ...todo,
    id: currentTodoId++,
    completed:false,
    createAt: new Date(),
    deleteAt: null,
    detail: ""};
}

const initState = [
  createTodo({ text: 'お米買う'}),
  createTodo({ text: '電気料金払う'}),
  createTodo({ text: '筋トレ'}),
  createTodo({ text: '日記書く'}),
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
    },
    CHANGE_TODO: (state, action) => {
      return state.map(t =>
          t.id === action.payload.id ? {...t, ...action.payload} : t
        );
    }
  }, initState);

const visibilityFilter = handleActions({
  SET_VISIBILITY_FILTER: (state, action) => {
    return action.payload;
  }
}, VisibilityTypes.SHOW_ACTIVE);

const editing = handleActions({
  EDIT_START: (state, action) => {
    return action.payload;
  },
  EDIT_END: (state, action) => {
    return null;
  }
}, null);


let currentProjectId = 0;

const projects = handleActions({
  ADD_PROJECT: (state, action) => [...state, { id: currentProjectId++, name: action.payload}]
}, [
  {id: currentProjectId++, name: "引っ越し", parent: null},
  {id: currentProjectId++, name: "GWの予定", parent: null},
]);

export default combineReducers({
  todos,
  visibilityFilter,
  editing,
  projects
});