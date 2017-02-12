import React from 'react';
import TodoAddContainer from '../containers/TodoAdd.js';
import VisibleTodoList from '../containers/VisibleTodoList.js';
import Footer from '../components/Footer.jsx';


const App = () => (
	<div>
		<TodoAddContainer />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;
