import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Vlatko,Your Next Web Developer</h2>
        <div className="prompt">
          <p>
            I love answers! <br />
            <br />
            Previously an Neue Fische- School and Pool for Digital Talent
            Trainee and I am always thinking about code and this passion often
            leads me to solve my coding problem, while I'm jogging, watching
            documentaries, or cooking fajitas for breakfast. I'll figure out the
            answer then rush to my computer to see it work.
            <br />
            <br /> My name is Vlatko Juric. I'm a passionate web developer who
            will do whatever it takes to find an answer. Get in touch to find
            the next answer together!
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
              HTML5, CSS3,ECMAScript 6,Responsive Design, Git, Github, Agile
              Workflow,Scrum, Kanban, Styled-Components, Pair programming,REST
              API
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
