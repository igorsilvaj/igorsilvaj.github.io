import React from 'react'
import { Outlet } from "react-router-dom";
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export const Projects = () => {
  return (
    <div className='projectsContainer'>
      <div className='projectsCardsContainer'>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
        <ProjectCard className="placeholder"/>
      </div>
      <Outlet />
    </div>
  )
}
