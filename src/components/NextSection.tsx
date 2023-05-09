import { FaArrowDown } from "react-icons/fa";
import styled from "styled-components";
import { scrollToElement } from "../utils/scroll";

const StyledDiv = styled.div`
  align-self: flex-end;
  animation: bounce 2s infinite ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 30px;
  margin-bottom: 10px;
  width: 100%;
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

export default function NextSection() {
  return (
    <StyledDiv>
      <FaArrowDown
        size={"30px"}
        onClick={() => scrollToElement("projects")}
      />
    </StyledDiv>
  );
}
