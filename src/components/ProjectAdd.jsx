import React from 'react';

const ProjectAdd = ({ onAddProject }) => {

	let input;

	const _handleKeyDown = function (ev) {
		if (ev.keyCode === 13) { // Enter の場合のみ
			var projectName = input.value.trim();
			if (projectName) {
				onAddProject(projectName);
			}
			input.value="";
		}
	};

	return (
	<div>
	    <span>＋プロジェクトを追加</span>
		<input type="text" ref={node => input = node} onKeyDown={_handleKeyDown} />
	</div>
	);
};

export default ProjectAdd;