import React from "react";
import Button from "react-bootstrap/Button";

export default function ProjectCard(props) {
  return (
    <div className="projectCard">
      <a
        className="projectCardLink"
        href="https://github.com"
        target={"_blank"}
        rel="noreferrer"
      >
        <div className="cardContent">
          <div className="projectThumbnail" />
          <p className="projectTitle">TrybeWallet</p>
          <div className="cardButtons">
            <Button variant="primary" type="submit">
              Live
            </Button>
            <Button variant="primary" type="submit">
              Github
            </Button>
          </div>
        </div>
      </a>
    </div>
  );
}
