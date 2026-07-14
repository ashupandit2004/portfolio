import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

import Scene from "./components/Three/Scene";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Achievements from "./components/Achievements/Achievements";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ThemeToggle />
      <Scene />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Achievements />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;