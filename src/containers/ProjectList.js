import React from 'react';
import { currentFilter } from '../actions/index';
import { projectFilter } from '../utils/Filters';


const ProjectListComponent = ({projects, currentId, onSelectProject}) => {
  
  const linkClass = (id) => id === currentId ? "nav-link active" : "nav-link";
  return (
    <ul className="nav nav-pills flex-column">
      {projects.map((project) =>
        <li className="nav-item">
          <a className={linkClass(project.id)} href="#" onClick={() => onSelectProject(project.id)}>
            {project.name}
          </a>
        </li>
      )}
    </ul>
  );
};

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  projects: state.projects,
  currentId: state.current.id
});

const mapDispatchToProps = (dispatch) => ({
  onSelectProject: (id) => dispatch(currentFilter({id: id, filter: projectFilter(id)}))
});

const ProjectList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListComponent);

export default ProjectList;