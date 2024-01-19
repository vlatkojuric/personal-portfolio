import ProjectItem from "../components/ProjectItem";
import CryptoApp from "../assets/crypto-app.png";
import MovieApp from "../assets/movie-search-app.png";
import PhotoApp from "../assets/photo-search-app.png";
import TravelApp from "../assets/travel-list-app.png";
import "../styles/Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        <Link
          to="https://travelingoo.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Travel List App" image={TravelApp} />
        </Link>
        <Link
          to="https://filmoplex.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Movie Search App" image={MovieApp} />
        </Link>

        <Link
          to="https://photofindapp.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Photo Search app" image={PhotoApp} />
        </Link>

        <Link
          to="https://cryptopricesapp.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProjectItem name="Crypto App" image={CryptoApp} />
        </Link>
      </div>
    </div>
  );
}
