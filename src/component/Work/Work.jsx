import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import ibmWeb from "../../assets/img/ibm-web.png";
import payroll from "../../assets/img/payroll.png";
import nordPort from "../../assets/img/nord-port.png";
import Header from "../UI/Header";
import * as Slide from "../UI/Slide";
import Button from "../UI/Button";
import "./Work.css";
import { FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiFramer } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function Work() {
  return (
    <motion.div className="work-section">
      <Header>Work</Header>
      <WorkContent />
      <WorkCard />
    </motion.div>
  );
}

const WorkContent = () => {
  return (
    <motion.div className="work-container">
      <Slide.SlideRight className="work-content">
        I gain lots of <span className="highlight">experience</span> through
        building and crafting.
      </Slide.SlideRight>

      <Slide.SlideLeft className="work-content work-right">
        Let's explore <span className="highlight">my previous works.</span>
      </Slide.SlideLeft>
    </motion.div>
  );
};

const WorkCard = () => {
  const ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  const contentWidth = workContent.length * 500 + 32 * (workContent.length - 1);
  const navigate = useNavigate();

  return (
    <motion.div className="work-sticky" ref={ref}>
      <motion.div className="work-card-container">
        <motion.div className="work">Works</motion.div>
        {scrollProgress > 0.8 && (
          <motion.div
            className="work-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ transition: "0.5s ease-in-out" }}
          >
            <div className="center">
              <Button onClick={() => navigate("/work")}>View More</Button>
            </div>
            <div className="detail text-center">
              Explore more in detail about my previous works
            </div>
          </motion.div>
        )}
        <motion.div
          className="work-card"
          style={{
            transform: `translateX(${-100 * scrollProgress}%)`,
            width: `${contentWidth}px`,
          }}
        >
          {workContent.map((work, key) => (
            <WorkCardContent content={work} key={key} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const WorkCardContent = ({ content }) => {
  return (
    <motion.div className="work-card-content">
      <motion.h1>{content.header}</motion.h1>
      {content.img !== "no" ? (
        <div>
          <img src={content.img} />
        </div>
      ) : (
        <motion.div>No Image</motion.div>
      )}
      {content.desc}
    </motion.div>
  );
};

export const workContent = [
  {
    header: "IBM&CO Website",
    img: ibmWeb,
    desc: (
      <p className="highlight">
        IBM&CO official website for Industrial Business Management course.
        (IE104)
      </p>
    ),
    id: "ibm-co-website",
    fullDesc: (
      <p>
        This website was developed for facilitating students in Industrial
        Business Management course . It was used for announcing news and
        recruiting for side projects. There were around{" "}
        <span className="highlight">90 users</span>. My job, at the beginning,
        was to develop and maintain this website from scratch. Since my team
        grew from 1 person to 3 people, I moved from developing task to{" "}
        <span className="highlight">
          managing this website like merging pull requests{" "}
        </span>
        instead.
      </p>
    ),
    stack: (
      <div className="flex-row-evenly">
        <FaReact size={80} />
        <SiFirebase size={80} />
      </div>
    ),
  },
  {
    header: "Payroll Prototype",
    img: payroll,
    desc: (
      <p className="highlight">
        Payroll service web application prototype for usability testing purpose.
      </p>
    ),
    id: "payroll-prototype",
    stack: (
      <div className="flex-row-evenly">
        <FaReact size={80} />
        <FaNode size={80} />
        <SiMongodb size={80} />
      </div>
    ),
  },
  {
    header: "Portfolio Website",
    img: nordPort,
    desc: <p className="highlight">My previous portfolio website.</p>,
    id: "portfolio-website",
    stack: (
      <div className="flex-row-evenly">
        <FaReact size={80} />
        <SiFramer size={80} />
      </div>
    ),
  },
];
