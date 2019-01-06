import React, {Component} from 'react';
import {allProjects} from '../data/projects.json';
import Project from './Project'

export default class Projects extends Component {

  render() {
    return (<div id="projects">
      <header>
        <h1>Projects</h1>
        <p>These are some of my projects</p>
      </header>
      {
        allProjects.map((project, i) => {
          return <Project key={i} title={project.title} imgName={project.imgName} description={project.description}/>
        })
      }
    </div>)
  }
}
