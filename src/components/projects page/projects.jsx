import React from 'react';
import ProjectItem from './projectitem';
import todolist from './images/Todolist.png'
import Tvmaze from '../../assets/TVMaze.png'

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Todo-List',
      feature: ['Todolist', 'LocalStorage', 2022],
      short: 'This app allows the user to add and remove todo list when completed',
      long: 'This app allows the user to add, edit and remove daily todos and this information is stored in the local storage thus when the page is refreshed, the user todos are stored until deleted manually',
      liveLink: 'https://ahmednazirmusah.github.io/To-Do-LIST/dist/',
      cardImage: todolist,
      dotImg: 'works/Counter.svg',
      bigtags: ['html', 'css', 'javascript', 'github'],
      smalltags: ['html', 'css', 'javascript'],
      classN: 'cla-1',
      source: 'https://github.com/AhmedNazirMusah/To-Do-LIST',
    },
    {
      id: 2,
      title: 'TV Maze',
      feature: ['Pair-Programming', 'Front End Dev', 2015],
      short: 'TV maze is a website which consumes an API with famous shows',
      long: 'TVmaze is a website about famous shows, it presents details about different shows and gives the user the ability to like or comment on their preferred show. The project was built with JavaScript ES6 and bundeled with Webpack.',
      liveLink: 'https://aminesoft.tech/tvmaze/index.html',
      cardImage: Tvmaze,
      bigtags: ['html', 'css', 'javascript', 'github', 'API'],
      smalltags: ['html', 'css', 'javascript'],
      classN: 'cla-1',
      source: 'https://github.com/AhmedNazirMusah/tvmaze',
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsPage;