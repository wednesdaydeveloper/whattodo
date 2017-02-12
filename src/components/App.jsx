import React from 'react';
import TodoAddContainer from '../containers/TodoAdd';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';


const App = () => (
	<div>
		<TodoAddContainer />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;
