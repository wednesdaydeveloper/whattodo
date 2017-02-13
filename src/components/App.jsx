import React from 'react';
import TodoAddContainer from '../containers/TodoAdd';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';
import Project from '../components/Project';


const App = () => (
	<div>
		<Project />
		<TodoAddContainer />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;
