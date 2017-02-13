import React from 'react';

const ProjectListComponent = ({projects}) => (
  <ul>
    {projects.map((project) =>
      <li>
        {project.name} 
      </li>
    )}
  </ul>
);

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  projects: state.projects
});

const ProjectList = connect(
  mapStateToProps
)(ProjectListComponent);

export default ProjectList;