import React from 'react';
import TodoAddContainer from '../containers/TodoAdd';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import Project from './Project';
import Header from './Header';


const App = () => (
	<div>
		<Header />
	
		<div className="container-fluid">
			<div className="row">
				<nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
					<Project />
				</nav>
				<main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
					<h2>To do</h2>
					<TodoAddContainer />
					<VisibleTodoList />
					<Footer />
				</main>
			</div>
		</div>
	</div>
);

export default App;
