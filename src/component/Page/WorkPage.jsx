import { motion } from "framer-motion";
import { StaticHeader } from "../UI/Header";
import transition from "../UI/Transition";
import "./WorkPage.css";
import { workContent } from "../Work/Work";
import Button from "../UI/Button";
import useViewportWidth from "../UI/useViewportWidth";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const WorkPage = () => {
  return (
    <>
      <motion.div className="page-container">
        <StaticHeader>Works</StaticHeader>
        <motion.div className="work-detail-grid">
          {workContent.map((work, key) => (
            <WorkCard work={work} key={key} />
          ))}
          <motion.div className="flex-center">Keep Crafting...</motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

const WorkCard = ({ work }) => {
  const width = useViewportWidth();
  const navigate = useNavigate();
  return (
    <motion.div>
      <motion.div className="work-card-detail-img">
        <img src={work.img} />
        {width > 748 && (
          <motion.div className="overlay">
            <Button onClick={() => navigate(`/work/${work.id}`)}>
              View More
            </Button>
          </motion.div>
        )}
      </motion.div>
      {work.desc}
      <br />
      {width < 749 && (
        <div className="text-center">
          <Button onClick={() => navigate(`/work/${work.id}`)}>
            View More
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default transition(WorkPage);
