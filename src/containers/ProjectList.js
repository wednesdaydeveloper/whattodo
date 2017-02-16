import React from 'react';
import GroupTypes from '../enum/GroupTypes';
import { currentGroup } from '../actions/index';


const ProjectListComponent = ({projects, currentGroup, onSelectProject}) => (
  <ul className="nav nav-pills flex-column">
    {projects.map((project) =>
      <li className="nav-item">
        <a className={currentGroup.groupType === GroupTypes.PROJECT && project.id === currentGroup.groupId ? "nav-link active" : "nav-link"} href="#" onClick={() => {
          onSelectProject(project.id);}}>{project.name} </a>
      </li>
    )}
  </ul>
);

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  projects: state.projects,
  currentGroup: state.group
});

const mapDispatchToProps = (dispatch) => ({
  onSelectProject: (id) => dispatch(currentGroup({
    groupId: id,
    groupType: GroupTypes.PROJECT})),
});

const ProjectList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListComponent);

export default ProjectList;