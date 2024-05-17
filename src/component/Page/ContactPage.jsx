import { motion } from "framer-motion";
import transition from "../UI/Transition";
import { StaticHeader } from "../UI/Header";
import Footer from "../Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <motion.div className="page-container">
        <StaticHeader>Contact</StaticHeader>
        <motion.div className="contact-grid-container"></motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default transition(ContactPage);
