import React from 'react';
import TodoAddContainer from '../containers/TodoAdd';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';


const App = () => (
	<div>
		<TodoAddContainer />
		<VisibleTodoList />
		<Footer />
		<AddTodo onClick={(e) => console.log("clicked!")}/>
	</div>
);

export default App;
