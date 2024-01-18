import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link
          to="https://www.linkedin.com/in/vlatko-juric-94bbb32a4/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/vlatkojuric/vlatkojuric" target="_blank">
          <GithubIcon />
        </Link>
        <Link to="mailto:juricv78@gmail.com">
          <EmailIcon />
        </Link>
      </div>
      <p>&copy; 2024 - Personal Portfolio</p>
    </div>
  );
}
