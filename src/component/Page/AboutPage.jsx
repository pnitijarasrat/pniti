import { motion } from "framer-motion";
import { StaticHeader } from "../UI/Header";
import Button from "../UI/Button";
import "./AboutPage.css";
import transition from "../UI/Transition";
import Footer from "../Footer/Footer";

const AboutPage = () => {
  return (
    <>
      <motion.div className="page-container">
        <StaticHeader>About</StaticHeader>
        <motion.div className="about-me-grid">
          <motion.div className="about-me-grid-item bio-item">
            <h2>Bio</h2>
            <ul>
              {bio.map((bio, key) => (
                <li key={key} className="bio-grid">
                  <span className="bold main-event">{bio.year}</span>
                  <div>
                    <div className="main-event">{bio.event}</div>
                    <div className="sub-event">{bio.subEvent}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="about-me-grid-item">
            <h2>Strength</h2>
            <p>My strengths based on Clifton Strength</p>
            <ul>
              {strength.map((strength, key) => (
                <li key={key} className="strength-list">
                  <span className="text-right">{key + 1}</span>
                  <span className="bold">{strength}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="about-me-grid-item">
            <div className="about-me-highlight">2+ Yrs</div>
            <div className="text-center">of Experiences</div>
          </motion.div>
          <motion.div className="about-me-grid-item">
            <div className="about-me-highlight">100%</div>
            <div className="text-center">Passionate in Frontend Developing</div>
          </motion.div>
          <motion.div className="about-me-grid-item">
            <div className="text-center">Download my resume here</div>
            <div className="download-button">
              <a href="puriwat-resume-2024.pdf" download>
                <Button>My Resume</Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default transition(AboutPage);

const bio = [
  {
    year: "2001",
    event: "Born in Bangkok",
  },
  {
    year: "2020",
    event: "Enrolled Industrial Engineering @ Chulalongkorn University",
  },
  {
    year: "2023",
    event: "Interned as Frontend Developer @ Donuts Bangkok",
    subEvent:
      "Collaborated with Ruby on Rail backend developer to develop a feature called Salary Adjustment which allow users to update multiple employees' information at a time. Users can choose between manually input or uploading excel.",
  },
  {
    year: "2024",
    event: "Graduated from Industrial Engineering @ Chulalongkorn University",
    subEvent:
      "With IE mindset and eager to apply this philosophy in Software Engineering field.",
  },
];

const strength = [
  "Deliberative",
  "Responsible",
  "Learner",
  "Relator",
  "Analytic",
];
