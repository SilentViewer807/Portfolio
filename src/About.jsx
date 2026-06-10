import React from "react";

const About = () => {
  return (
    <>
      <figure className="wrapped-figure">
        <img
          src="https://i.imgur.com/6qpwJs8.jpeg"
          className="figure-image"
          alt="Profile"
        />
        <figcaption className="figure-caption">
          <h1 className="name-title">Philip Taylor</h1>
          <span className="content">I’m a front-end developer focused on building clean, responsive websites. I write organized code and pay attention to details such as misusing react hooks. I enjoy turning ideas into simple, interactive web experiences using HTML, CSS, JavaScript, and React. Below, you can explore my experience and projects.</span>
        </figcaption>
      </figure>
    </>
  );
};

export default About;