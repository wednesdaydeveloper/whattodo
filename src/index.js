import { createAction } from 'redux-actions';


export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = createAction(ADD_TODO, text => text);
export const delTodo = createAction(DEL_TODO, index => index);
export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, filter => filter);
export const toggleTodo = createAction(TOGGLE_TODO, id => id);
