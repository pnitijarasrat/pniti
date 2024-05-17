import Home from "./Home";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

const HomeContent = ({ openNav }) => {
  const [renderContent, setRenderContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderContent(true);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ transition: "1s ease-in-out" }}
    >
      <Home openNav={openNav} />
      {renderContent && (
        <motion.div className="content">
          <About />
          <Work />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomeContent;
