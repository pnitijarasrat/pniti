import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate, stagger } from "framer-motion";
import "./App.css";
import HomeContent from "./component/Home/HomeContent";
import { pageList } from "./component/constant/pageList";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import AboutPage from "./component/Page/AboutPage";
import WorkPage from "./component/Page/WorkPage";
import ContactPage from "./component/Page/ContactPage";
import { Nav } from "./component/Home/Home";
import WorkDetailPage from "./component/Page/WorkDetailPage";
import usePreventZoom from "./component/UI/usePreventZoom";

//TODO: mobile navigator
//TODO: footer content

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();

  usePreventZoom();

  return (
    <>
      <Nav openNav={() => setMobileNav(true)} />
      {mobileNav && <MobileNav closeNav={() => setMobileNav(false)} />}

      <div style={{ zIndex: mobileNav ? "-1" : "1" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<HomeContent openNav={() => setMobileNav(true)} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:workId" element={<WorkDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

const MobileNav = ({ closeNav }) => {
  useEffect(() => {
    animate(
      ".mobile-nav-li",
      { opacity: 1, transform: "translateX(0)" },
      { delay: stagger(0.1) },
    );
  });
  const navigate = useNavigate();
  return (
    <div className="mobile-nav-container">
      <motion.ul className="mobile-nav">
        {pageList.map((page, key) => (
          <motion.li
            onClick={() => {
              navigate(page.link);
              closeNav();
            }}
            key={key}
            className="mobile-nav-li"
          >
            {page.page}
          </motion.li>
        ))}
        <motion.li
          onClick={closeNav}
          className="mobile-nav-li"
          whileHover={{ cursor: "pointer" }}
          whileTap={{ scale: 0.97 }}
          style={{ marginTop: "64px" }}
        >
          Close
        </motion.li>
      </motion.ul>
      <motion.div className="backdrop" />
    </div>
  );
};

export default App;
