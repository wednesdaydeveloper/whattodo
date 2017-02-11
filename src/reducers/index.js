import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { ADD_TODO, DEL_TODO } from '../actions/index.js';


const initState = [
    {id: -1, text: 'aaa', completed:false, createAt: new Date(), deleteAt: null },
    {id: -2, text: 'bbb', completed:false, createAt: new Date(), deleteAt: null },
    {id: -3, text: 'ccc', completed:false, createAt: new Date(), deleteAt: null },
  ];

let currentId = 0;

const todos = handleActions(
  {
    ADD_TODO: (state, action) => {
      return [
            ...state,
            {id: currentId++, text:action.payload, completed:false, createAt: new Date(), deleteAt: null }
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