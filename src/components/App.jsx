import React from 'react';
//import 'react-date-picker/index.css';
//import { DateField, Calendar } from 'react-date-picker';

import TodoAddContainer from '../containers/TodoAdd.js';
import VisibleTodoList from '../containers/VisibleTodoList.js';
import Footer from '../components/Footer.jsx';


let date = '2017-04-24'

const App = () => (
	<div>
		<TodoAddContainer />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;
