import styled from 'styled-components'
import ContactForm from '../components/ContactForm'
import Controls from '../components/Controls'
import Footer from '../components/Footer'
import HamburgerDropdown from '../components/HamburgerMenu'
import Header from '../components/Header'
import Hero from '../components/Hero'
import NavLinks from '../components/NavLinks'
import Projects from '../components/Projects'
import { scrollToTop } from '../utils/scroll'

const StyledParagraph = styled.p`
  cursor: pointer;
`

export default function Home () {
  const links = [
    { name: 'Projetos', url: 'projects', type: 'anchor' },
    { name: 'Contato', url: 'contact', type: 'anchor' }
  ]
  return (
    <>
      <Header
        title={
          <StyledParagraph
            onClick={() => {
              scrollToTop()
            }}
          >
            .DEV
          </StyledParagraph>
        }
        desktopMenu={<NavLinks links={links} />}
        mobileMenu={
          <HamburgerDropdown content={<NavLinks mobile links={links} />} />
        }
      />
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
      <Controls links={links} />
    </>
  )
}
