import React from "react";
import { ProjectCarousel } from "../../components/ProjectCarousel/ProjectCarousel";
import confused from "../../assets/img/ea71a1c430cbaf3ad44607367a09d75a0d674bebb822f677741d9406d358c711.png";
import RainingCode from "../../components/RainingCode/RainingCode";

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <RainingCode />
        <span className="initTxt">
          Inicio do portfólio para postagem dos projetos desenvolvidos.
        </span>
        <img src={confused} alt="confused" className="confusedImg" />
        <div />
      </div>
      <div className="carousel">
        <ProjectCarousel />
      </div>
    </div>
  );
};
