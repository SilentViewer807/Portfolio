import React, { useEffect, useState } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const getScrollThreshold = (width) => {
      if (width > 514) return 76;
      if (width > 333) return 124;
      return 171;
    };

  useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;
    const threshold = getScrollThreshold(window.innerWidth);

    if (y > threshold + 4 && !scrolled) {
      setScrolled(true);
    } else if (y < threshold - 4 && scrolled) {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [scrolled]);
  return (
    <nav
      id="navbar"
      aria-label="Primary navigation"
      className={scrolled ? "nav-sticky navbar" : "nav-static navbar"}
    >
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
    </nav>
  );
};

export default NavigationBar;