import styled from "styled-components";
import { constants } from "../GlobalStyle";

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  background-color: white;
  color: black;
  height: 50px;
  margin-top: ${constants.HEADER_HEIGHT};
`;

export default function Footer() {
  return (
    <StyledSection>
      <p>Em constante desenvolvimento 👨‍💻</p>
      <p>Última versão em Maio/23</p>
    </StyledSection>
  );
}
