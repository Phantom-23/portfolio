import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Linkedlist from '../../Assests/linkedlist.png';
import houseprice from '../../Assests/houseprice.jpeg';
import urlshortener from '../../Assests/urlshortener.jpeg';
import Webdev from '../../Assests/weddev.jpeg';
import './Projects.css';

const projects = [
  {
    title: 'Custom URL Shortener',
    description: 'Shortens long URLs into custom short URLs.',
    techStack: 'Django, HTML, CSS',
    githubLink: 'https://github.com/Phantom-23/urlshortener',
    imageUrl: urlshortener, // Replace with actual image URL
  },
  {
    title: 'Portfolio website',
    description: 'My protfolio website showcases my skills,coding profiles,projects which you are currently watching.',
    techStack: 'React,Css,Html',
    githubLink: 'https://github.com/Phantom-23/portfolio',
    imageUrl: Webdev, // Replace with actual image URL
  },
  {
    title: 'Implementation of Linked List',
    description: 'Shows how insertion and deletion work on linked lists.',
    techStack: 'C, Data Structures',
    githubLink: 'https://github.com/Phantom-23/Linkedlist',
    imageUrl: Linkedlist, // Replace with actual image URL
  },
  {
    title: 'House Price Prediction',
    description: 'Predicts house prices using ML algorithms like Linear Regression and Random Forest Regression.',
    techStack: 'Python, Pandas, NumPy, sklearn',
    githubLink: 'https://github.com/Phantom-23/Housepriceprediction',
    imageUrl: houseprice, // Replace with actual image URL
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Welcome to My Projects Page</h1>
      <p>Explore some of the projects I've worked on. Each project includes a brief description and the technologies used.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            className="project-card" 
            key={project.title} 
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <h3 style={{ color: 'white' }}>{project.title}</h3>
            <p className='tester' style={{ color: 'white' }}>{project.description}</p>
            <p style={{ color: 'white' }}><strong>Tech Stack:</strong> {project.techStack}</p>
            <Link to={project.githubLink} className='github-link'><button className='github-btn'><span className="github-span"><FaGithub size={30} /></span>Link to github</button></Link>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
