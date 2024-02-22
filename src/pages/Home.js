import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Vlatko</h2>
        <div className="prompt">
          <p>
            I recently graduated at NeueFische - School and Pool for Digital
            Talent. I have an excellent knowledge of English and German
            language. My goal is to join the software-development world as a
            Frontend Developer. I have good knowledge of ES6, CSS and basic of
            ReactJS. After graduation I started working more with JavaScript and
            ReactJS, and developed a few interesting projects which you can see
            in the Projects page.
          </p>
          <Link to="https://www.linkedin.com/in/vlatkojuric/" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link to="https://github.com/vlatkojuric/vlatkojuric" target="_blank">
            <GithubIcon />
          </Link>
          <Link to="mailto:juricv78@gmail.com">
            <EmailIcon />
          </Link>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Language</h2>
            <span>JavaScript(ES6)</span>
          </li>

          <li className="item">
            <h2>Framework</h2>
            <span>ReactJS</span>
          </li>

          <li className="item">
            <h2>Other skills</h2>
            <span>
              HTML5, CSS, Git, Github, Agile Workflow, Kanban, Styled-Components
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
