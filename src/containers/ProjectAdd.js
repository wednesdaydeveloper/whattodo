import { connect } from 'react-redux';
import { addProject } from '../actions/index';
import ProjectAdd from '../components/ProjectAdd';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onAddProject: (name) => dispatch(addProject(name)),
});

const ProjectAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectAdd);

export default ProjectAddContainer;