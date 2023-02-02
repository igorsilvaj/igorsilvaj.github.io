import React from "react";
import ProjectCard from "./ProjectCard";

export function ProjectCarousel() {

  const handleClick = (side) => {
    if (side === "left") {
      const gallery = document.querySelector("#gallery");
      gallery.scrollLeft = gallery.scrollLeft - 310;
      if (gallery.scrollLeft === 0)
        return (gallery.scrollLeft = gallery.scrollWidth - gallery.clientWidth);
    }
    if (side === "right") {
      const gallery = document.querySelector("#gallery");
      if (gallery.scrollLeft === gallery.scrollWidth - gallery.clientWidth)
        return (gallery.scrollLeft = 0);
      gallery.scrollLeft = gallery.scrollLeft + 310;
    }
  };

  return (
    <div className="carouselWrapper">
      <div
        className="arrow-left"
        onClick={() => handleClick("left")}
      >
        {"<"}
      </div>
      <div className="gallery" id="gallery">
        <ProjectCard className='placeholder'/>
        <ProjectCard className='placeholder'/>
        <ProjectCard className='placeholder'/>
        <ProjectCard className='placeholder'/>
        <ProjectCard className='placeholder'/>
        <ProjectCard className='placeholder'/>
        <ProjectCard className='placeholder'/>
        <ProjectCard className='placeholder'/>
      </div>
      <div
        className="arrow-right"
        onClick={() => handleClick("right")}
      >
        {">"}
      </div>
    </div>
  );
}
