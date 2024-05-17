import { motion } from "framer-motion";
import transition from "../UI/Transition";
import { StaticHeader } from "../UI/Header";
import Footer from "../Footer/Footer";
import "./ContactPage.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <motion.div className="page-container">
        <StaticHeader>Contact</StaticHeader>
        <ContactContent />
      </motion.div>
      <Footer />
    </>
  );
};

const ContactContent = () => {
  return (
    <motion.div className="contact-page-grid">
      <motion.div className="contact-page-grid-item  text-contact">
        <motion.div className="contact-text-grid">
          <span>Email</span>puriwatds@gmail.com
        </motion.div>
        <motion.div className="contact-text-grid">
          <span>Tel</span>080-429-2884
        </motion.div>
      </motion.div>
      <motion.div className="contact-page-grid-item text-center">
        <a
          href="https://www.linkedin.com/in/p-nitijarasrat/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={50} />
        </a>
      </motion.div>
      <motion.div className="contact-page-grid-item text-center">
        <a
          href="https://www.instagram.com/qwertyadgsfhzxcvb/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={50} />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default transition(ContactPage);
