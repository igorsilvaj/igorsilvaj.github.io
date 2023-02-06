import React from "react";
import { ProjectCarousel } from "../../components/ProjectCarousel/ProjectCarousel";
import confused from "../../assets/img/ea71a1c430cbaf3ad44607367a09d75a0d674bebb822f677741d9406d358c711.png";

export const Home = () => {
  return (
    <div>
      <div className="placeholder">
        <div className="hero">
          <div className="rainingCode">
            <div className="one" />
            <div className="two" />
            <div className="three" />
            <div className="four" />
            <div className="five" />
            <div className="six" />
          </div>
          <span className="initTxt">
            Inicio do portfólio para postagem dos projetos desenvolvidos.
          </span>
          <img src={confused} alt="confused" className="confusedImg" />
          <div />
        </div>
        <div className="carousel">
          Projetos
          <ProjectCarousel />
        </div>
      </div>
    </div>
  );
};
