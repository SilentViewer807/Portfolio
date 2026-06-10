import React, { useEffect } from "react";
import "./App.css";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const App = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const setScrollMargins = () => {
      const height = navbar.offsetHeight;
      document.querySelectorAll("#about, #experience, #projects, #footer").forEach(el => {
        el.style.scrollMarginTop = `${height + 1}px`;
      });
    };

    setScrollMargins();
    window.addEventListener("resize", setScrollMargins);
    return () => window.removeEventListener("resize", setScrollMargins);
  }, []);

  return (
    <>
      <NavigationBar />

      <main>
        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <footer id="footer">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default App;
