import Contact from "@/components/contact";
import Projects from "../components/Projects";
import Header from "../components/header";
import Hero from "../components/hero";
import Skills from "@/components/skills";
import AppContextProvider from "@/context/AppContext";

export default function Home() {
  return (
    <AppContextProvider>
      <main>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </AppContextProvider>
  );
}
