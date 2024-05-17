import "./WorkDetailPage.css";
import { motion } from "framer-motion";
import transition from "../UI/Transition";
import { StaticHeader } from "../UI/Header";
import { useParams, useNavigate } from "react-router-dom";
import { workContent } from "../Work/Work";
import Footer from "../Footer/Footer";
import Button from "../UI/Button";

const WorkDetailPage = () => {
  const { workId } = useParams();
  const work = workContent.filter((work) => workId === work.id)[0];

  const navigate = useNavigate();

  return (
    <>
      <motion.div className="page-container">
        <motion.div className="sticky-component">
          <StaticHeader>{work.header}</StaticHeader>
          <motion.div className="work-detail-page-grid">
            <img className="work-detail-grid-img" src={work.img} />
            <div>
              <h2>Description</h2>
              {work.fullDesc}
            </div>
            <div className="work-detail-grid-tech">
              <motion.h2 style={{ marginBottom: "16px" }}>Tech Stack</motion.h2>
              {work.stack}
            </div>
          </motion.div>
        </motion.div>
        <div className="flex-center" style={{ marginTop: "64px" }}>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </motion.div>
      <Footer />{" "}
    </>
  );
};

export default transition(WorkDetailPage);
