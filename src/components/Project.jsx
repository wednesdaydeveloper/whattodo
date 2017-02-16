import React from 'react';
import ProjectAdd from '../containers/ProjectAdd';
import ProjectList from '../containers/ProjectList';



const Project = () => (
	<div>
	
		<ul className="nav nav-pills flex-column">
			<li className="nav-item"><a className='nav-link' href='#'>インボックス</a>
			</li>
			<li className="nav-item"><a className='nav-link' href='#'>本日</a>
			</li>
			<li className="nav-item"><a className='nav-link' href='#'>７日間</a>
			</li>
			</ul>	
		<ProjectList />
		<ProjectAdd />
	</div>
);

export default Project;
