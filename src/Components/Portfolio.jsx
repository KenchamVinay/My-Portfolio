/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Forest-Tree-Counter",
    description:
      "My First Simple Website, Created using HTML, CSS and JavaScript. Developed a logic in JavaScript to count the number of trees in a forest.",
    url: "https://github.com/KenchamVinay/Forest-Tree-Counter.git",
  },
  {
    title: "First-Contributions",
    description:
      "I have completed the standard fork -> clone -> edit -> pull request workflow that you'll often encounter as a contributor! ",
    url: "https://github.com/KenchamVinay/first-contributions.git",
  },
  {
    title: "The-Bit-Hub",
    description:
      "This website uses natural language processing algorithms to analyze Twitter sentiment and provide real-time updates on the sentiment surrounding Bitcoin.",
    url: "https://github.com/KenchamVinay/THE-BIT-HUB.git",
  },
  {
    title: "My-Portfolio",
    description:
      "Created a JavaScript Portfolio Site with GitHub Codespaces and Copilot.",
    url: "https://github.com/KenchamVinay/My-Portfolio.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
