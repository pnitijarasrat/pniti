import {
  useMotionValueEvent,
  useTransform,
  motion,
  animate,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Header from "../UI/Header";
import * as Slide from "../UI/Slide";
import "./About.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

export default function About() {
  return (
    <motion.div className="about-section">
      <Header>About</Header>
      <AboutContent />
    </motion.div>
  );
}

const AboutContent = () => {
  const navigate = useNavigate();
  return (
    <motion.div className="about-container">
      <Slide.SlideRight className="about-view-more">
        <Button onClick={() => navigate("/about")}>View More</Button>
        <div className="detail">
          Explore my biography, education, and resume !
        </div>
      </Slide.SlideRight>
      <Slide.SlideLeft className="about-content">
        My life involves around{" "}
        <span className="highlight">learning and developing myself</span>. I do
        what I enjoy and <span className="highlight">I enjoy coding !</span>
      </Slide.SlideLeft>
    </motion.div>
  );
};

const AboutGridContent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <section>
      <motion.div className="about-grid-container" ref={ref}>
        <Slide.SlideRight>
          <motion.div
            className="about-grid-content"
            style={{ opacity: scrollYProgress }}
          >
            <motion.span>COOL</motion.span>
          </motion.div>
        </Slide.SlideRight>
        <Slide.SlideLeft>
          <motion.div
            className="about-grid-content"
            style={{ opacity: scrollYProgress }}
          >
            <span>ISN'T IT</span>
          </motion.div>
        </Slide.SlideLeft>
      </motion.div>
    </section>
  );
};
