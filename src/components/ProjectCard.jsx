import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="projectCard">
      <a className="projectCardLink" href="https://github.com" target={"_blank"} rel="noreferrer">
        <div className="cardContent">
          <div className="projectThumbnail" />
          <p className="projectTitle">TrybeWallet</p>
          <p className="projectDescription">FrontEnd</p>
        </div>
      </a>
    </div>
  );
}
