import React, { Component } from 'react';
import ProjectsItem from './ProjectItem';



class ProjectItem extends Component {
  render() {
  	let ProjectsItems;
  	if(this.props.projects){
		projectItems = this.props.projects.map(project => {
		// 		console.log(project);
			return(
				<projectItem key={project.title} project = {project} />
				);
		});
	}
     return (
      <div className="Projects">
          {projectsItems}
      </div>
    );
  }
}

export default ProjectsItem;
