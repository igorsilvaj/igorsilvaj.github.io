import Header from "../components/Header";
import NavLinks from "../components/NavLinks";
import HamburgerDropdown from "../components/HamburgerMenu";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { scrollToTop } from "../utils/scroll";
import styled from "styled-components";
import Controls from "../components/Controls";
import { constants } from "../GlobalStyle";

const StyledParagraph = styled.p`
  cursor: pointer;
`;

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  min-height: calc(100vh - 45px);
  margin-top: ${constants.HEADER_HEIGHT};
`;

export default function Home() {
  const links = [
    { name: "Projetos", url: "projects", type: "anchor" },
    { name: "Contato", url: "contact", type: "anchor" },
  ];
  return (
    <>
      <Header
        title={
          <StyledParagraph onClick={() => scrollToTop()}>.DEV</StyledParagraph>
        }
        desktopMenu={<NavLinks links={links} />}
        mobileMenu={
          <HamburgerDropdown content={<NavLinks mobile links={links} />} />
        }
      />
      <Hero />
      <Container>
        <Projects />
        <ContactForm />
      </Container>
      <Footer />
      <Controls links={links} />
    </>
  );
}
