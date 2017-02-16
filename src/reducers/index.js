import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { ADD_TODO, DEL_TODO, CHANGE_TODO, ADD_PROJECT } from '../actions';
import VisibilityTypes from '../enum/VisibilityTypes';
import GroupTypes from '../enum/GroupTypes';



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

const todoInitState = [
  createTodo({ text: '新居探す'       , group: {groupId: 1001, groupType: GroupTypes.PROJECT}}),
  createTodo({ text: '引越し業者選定' , group: {groupId: 1001, groupType: GroupTypes.PROJECT}}),
  createTodo({ text: 'プレゼント買う' , group: {groupId: 1002, groupType: GroupTypes.PROJECT}}),
  createTodo({ text: '店予約'         , group: {groupId: 1002, groupType: GroupTypes.PROJECT}}),
  createTodo({ text: '筋トレ'         , group: {groupId: null, groupType: GroupTypes.INBOX}}),
  createTodo({ text: '日記書く'       , group: {groupId: null, groupType: GroupTypes.INBOX}}),
];

let currentProjectId = 1001;

const projectInitState = [
  {id: currentProjectId++, name: "引っ越し"     , parent: null, closed: false},
  {id: currentProjectId++, name: "お誕生日会"   , parent: null, closed: false},
  {id: currentProjectId++, name: "お花見の準備" , parent: null, closed: false},
]

const todos = handleActions(
  {
    ADD_TODO: (state, action) => {
      return [
        ...state,
        createTodo(action.payload)
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
  }, todoInitState);

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

const group = handleActions({
  CURRENT_GROUP: (state, action) => {
    return action.payload;
  },
}, {groupId: 1001, groupType: GroupTypes.PROJECT});


const projects = handleActions({
  ADD_PROJECT: (state, action) => [...state, { id: currentProjectId++, name: action.payload}]
}, projectInitState);

export default combineReducers({
  todos,
  visibilityFilter,
  editing,
  projects,
  group
});