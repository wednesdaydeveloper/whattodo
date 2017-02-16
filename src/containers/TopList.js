import React from 'react';
import { currentFilter } from '../actions/index';
import { inboxFilter, allFilter } from '../utils/Filters';

import Ids from '../enum/Ids';

const TopListComponent = ({currentId, onSelectProject}) => {

	  const linkClass = (id) => id === currentId ? "nav-link active" : "nav-link";
	
	return (
		<ul className="nav nav-pills flex-column">
			<li className="nav-item"><a className={linkClass(Ids.INBOX)} href='#' onClick={() => onSelectProject({id: Ids.INBOX, filter: inboxFilter()})}>未分類</a>
			</li>
			<li className="nav-item"><a className={linkClass(Ids.ALL)} href='#' onClick={() => onSelectProject({id: Ids.ALL, filter: allFilter()})}>すべて</a>
			</li>
			<li className="nav-item"><a className='nav-link' href='#' >今日</a>
			</li>
			<li className="nav-item"><a className='nav-link' href='#' >７日間</a>
			</li>
		</ul>	
	)};

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentId: state.current.id
});


const mapDispatchToProps = (dispatch) => ({
  onSelectProject: (filter) => dispatch(currentFilter(filter))
});

const TopList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopListComponent);

export default TopList;