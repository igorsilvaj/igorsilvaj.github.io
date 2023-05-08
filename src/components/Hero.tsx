import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import { constants } from "../GlobalStyle";
import { scrollToElement } from "../utils/scroll";

import RainingCode from "./RainingCode";

const StyledSection = styled.section`
  background-color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  min-height: 600px;
  height: calc(100vh - ${constants.HEADER_HEIGHT});
  margin-top: ${constants.HEADER_HEIGHT};
`;

const StyledDiv = styled.div`
  align-self: flex-end;
  animation: bounce 2s infinite ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 30px;
  margin-bottom: 10px;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const Presentation = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const StyledHeading = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  width: 100%;
  z-index: 998;

  @media screen and (width < 675px) {
    font-size: 4rem;
  }
`;

const StyledHeading2 = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  z-index: 998;

  @media screen and (width < 675px) {
    font-size: 1.5rem;
  }
`;

const StyledHeading3 = styled.h3`
  font-size: 1rem;
  font-weight: 900;
  text-align: center;
  width: 100%;
  z-index: 998;

  @media screen and (width < 675px) {
    font-size: 1rem;
  }
`;

export default function Hero() {
  return (
    <StyledSection id="hero">
      <RainingCode />
      <Presentation>
        <StyledHeading> Olá! Sou o Igor. </StyledHeading>
        <StyledHeading2>Desenvolvedor Full Stack Junior.</StyledHeading2>
        <StyledHeading3>
          <p>Aqui ficam organizados meus projetos do github por categorias.</p>
          <p>Conforme aprendo novas tecnologias estou aplicando aqui.</p>
        </StyledHeading3>
      </Presentation>
      <StyledDiv>
        <FaArrowDown
          size={"30px"}
          onClick={() => scrollToElement("projects")}
        />
      </StyledDiv>
    </StyledSection>
  );
}
