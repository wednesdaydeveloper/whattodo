import { createAction } from 'redux-actions';



export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const EDIT_START = 'EDIT_START';
export const EDIT_END = 'EDIT_END';
export const ADD_PROJECT = 'ADD_PROJECT';
export const CURRENT_GROUP = 'CURRENT_GROUP';

export const addTodo            = createAction(ADD_TODO);
export const delTodo            = createAction(DEL_TODO);
export const changeTodo         = createAction(CHANGE_TODO);
export const setVisibilityFilter= createAction(SET_VISIBILITY_FILTER);
export const editStart          = createAction(EDIT_START);
export const editEnd            = createAction(EDIT_END);
export const addProject         = createAction(ADD_PROJECT);
export const currentGroup       = createAction(CURRENT_GROUP);
