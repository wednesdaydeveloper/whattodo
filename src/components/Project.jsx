import React from 'react';
import ProjectAdd from '../containers/ProjectAdd';
import ProjectList from '../containers/ProjectList';
import TopList from '../containers/TopList';

const Project = () => (
	<div>
		<TopList />
		<ProjectList />
		<ProjectAdd />
	</div>
);

export default Project;
