import { motion } from "framer-motion";
import * as Slide from "../UI/Slide";
import "./Contact.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <motion.div className="contact-section">
      <motion.div className="contact-grid-container">
        <Slide.SlideUp className="pop-text">
          I'm currently looking for{" "}
          <span className="highlight">full-time frontend developer</span> job in
          <span className="highlight"> Bangkok.</span>
        </Slide.SlideUp>
        <Slide.SlideUp className="text-right pop-text">
          If you are interested in{" "}
          <span className="highlight">having me in your team.</span> Let's
          <span className="highlight"> Connect !</span>
        </Slide.SlideUp>
        <Slide.SlideUp className="text-right">
          <Button onClick={() => navigate("/contact")}>Contact Me</Button>
          <div className="detail">Get my contact info.</div>
        </Slide.SlideUp>
      </motion.div>
    </motion.div>
  );
}
