import React from 'react';

const ProjectListComponent = ({projects}) => (
  <ul className="nav-item">
    {projects.map((project) =>
      <li>
        <a className="nav-link" href="#">{project.name} </a>
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