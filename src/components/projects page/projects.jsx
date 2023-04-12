import React from 'react';
import ProjectItem from './projectitem';
import todolist from './images/Todolist.png';
import Tvmaze from '../../assets/TVMaze.png';
import Wheelwizard from '../../assets/car details.png';
import bookstore from '../../assets/Bookstore.png';

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Wheel-Wizard',
      feature: ['Full-Stack', 'Pair-Programming', 2023],
      short: 'Full-stack app used to book an appointment to try a car.',
      long: 'Full-stack app used to book an appointment to try a car. This app is both mobile and desktop responsive. The app allow users to sign_up, login, book an appointment by reservation, can check appointments and cancel appointments, and logout as well.',
      liveLink: 'https://wheel-wizard.netlify.app/',
      cardImage: Wheelwizard,
      bigtags: ['React', 'Redux', 'Rails'],
      smalltags: ['React', 'Redux', 'ROR', 'Pair-Programming'],
      classN: 'cla-1',
      source: 'https://github.com/AhmedNazirMusah/wheel-wizard-frontend',
    },
    {
      id: 2,
      title: 'TV Maze',
      feature: ['Pair-Programming', 'Front End Dev', 2022],
      short: 'TV maze is a website which consumes an API with famous shows',
      long: 'TVmaze is a website about famous shows, it presents details about different shows and gives the user the ability to like or comment on their preferred show. The project was built with JavaScript ES6 and bundeled with Webpack.',
      liveLink: 'https://aminesoft.tech/tvmaze/index.html',
      cardImage: Tvmaze,
      bigtags: ['html', 'CSS', 'javascript'],
      smalltags: ['html', 'CSS', 'javascript', 'API'],
      classN: 'cla-1',
      source: 'https://github.com/AhmedNazirMusah/tvmaze',
    },
    {
      id: 3,
      title: 'Book Store',
      feature: ['Book Store', 'Front End Dev', 2022],
      short: 'A Single Page App (SPA) that allows users to: add a book and remove a selected book. ',
      long: 'A Single Page App (SPA) that allows users to: add a book and remove a selected book. ',
      liveLink: 'https://cerulean-gecko-d4ce78.netlify.app/',
      cardImage: bookstore,
      bigtags: ['React', 'Redux', 'CSS'],
      smalltags: ['html', 'CSS', 'javascript', 'Redux'],
      classN: 'cla-1',
      source: 'https://github.com/AhmedNazirMusah/Bookstore',
    },
    {
      id: 5,
      title: 'Todo-List',
      feature: ['Todolist', 'LocalStorage', 2022],
      short: 'This app allows the user to add and remove todo list when completed',
      long: 'This app allows the user to add, edit and remove daily todos and this information is stored in the local storage thus when the page is refreshed, the user todos are stored until deleted manually.',
      liveLink: 'https://ahmednazirmusah.github.io/To-Do-LIST/dist/',
      cardImage: todolist,
      dotImg: 'works/Counter.svg',
      bigtags: ['html', 'CSS', 'javascript', 'github'],
      smalltags: ['html', 'CSS', 'javascript'],
      classN: 'cla-1',
      source: 'https://github.com/AhmedNazirMusah/To-Do-LIST',
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsPage;
