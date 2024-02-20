import ProjectItem from "../components/ProjectItem";
import RandomAdviceApp from "../assets/random-advice.gif";

import PhotoApp from "../assets/photo-search-app.gif";
import TravelApp from "../assets/travel-list-app.gif";
import WorldCountriesApp from "../assets/world-countries.gif";
import "../styles/Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        <Link
          to="https://search-the-world.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="World Countries App" image={WorldCountriesApp} />
        </Link>

        <Link
          to="https://travelingoo.netlify.app/"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <ProjectItem name="Travel List App" image={TravelApp} />
        </Link>

        <Link
          to="https://photofindapp.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Photo Search app" image={PhotoApp} />
        </Link>

        <Link
          to="https://random-advice-giver.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Random Advice Giver" image={RandomAdviceApp} />
        </Link>
      </div>
    </div>
  );
}
