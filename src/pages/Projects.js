import ProjectItem from "../components/ProjectItem";
import CryptoApp from "../assets/crypto-app.png";
import MovieApp from "../assets/movie-search-app.png";
import PhotoApp from "../assets/photo-search-app.png";
import TravelApp from "../assets/travel-list-app.png";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        <ProjectItem name="Travel List App" image={TravelApp} />
        <ProjectItem name="Movie Search App" image={MovieApp} />
        <ProjectItem name="Photo Search app" image={PhotoApp} />
        <ProjectItem name="Crypto App" image={CryptoApp} />
      </div>
    </div>
  );
}
