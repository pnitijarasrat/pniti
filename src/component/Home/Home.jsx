import { stagger, motion, animate } from "framer-motion";
import useViewportWidth from "../UI/useViewportWidth";
import { useEffect } from "react";
import "./Home.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { pageList } from "../constant/pageList";
import { Link, useLocation } from "react-router-dom";

export default function Home({ openNav, closeNav }) {
  return (
    <motion.div className="home-section">
      <HomeContent />
      <ScrollDown />
    </motion.div>
  );
}

export const Nav = ({ openNav }) => {
  const width = useViewportWidth();
  const location = useLocation().pathname;

  useEffect(() => {
    animate("nav", { opacity: 1, transform: "translateY(0)" }, { delay: 3.5 });
  }, []);

  return (
    <motion.nav
      style={{
        opacity: location === "/" ? 0 : 1,
        transform: location === "/" ? "translateY(-20px)" : "translateY(0)",
      }}
    >
      <motion.div className="logo">
        <motion.h1>Puriwat Nitijarasrat</motion.h1>
        <motion.p>
          An enthusiastic frontend developer based in Thailand.
        </motion.p>
      </motion.div>
      {width > 748 ? (
        <motion.ul>
          {pageList.map((page, key) => (
            <Link key={key} to={page.link}>
              <motion.li whileTap={{ scale: 0.97 }}>{page.page}</motion.li>
            </Link>
          ))}
        </motion.ul>
      ) : (
        <motion.div
          whileTap={{ scale: 0.97 }}
          whileHover={{ cursor: "pointer" }}
        >
          <RxHamburgerMenu size={30} onClick={openNav} />
        </motion.div>
      )}
    </motion.nav>
  );
};

const HomeContent = () => {
  useEffect(() => {
    animate(".home-hero", { opacity: 1 }, { delay: stagger(1) });
  });
  return (
    <motion.div className={"home-content"}>
      {HomeContentText.map((text, key) => (
        <motion.div key={key} className="home-hero">
          {text}
        </motion.div>
      ))}
    </motion.div>
  );
};

const HomeContentText = [
  <div className="home-none-highlight">hi I'm Puriwat</div>,
  <div className="home-highlight" style={{ textAlign: "center" }}>
    Frontend Developer
  </div>,
  <div className="home-none-highlight" style={{ textAlign: "right" }}>
    from Thailand
  </div>,
];

const ScrollDown = () => {
  useEffect(() => {
    animate(
      ".home-scroll",
      { opacity: 1, transform: "translateY(0)" },
      { delay: 3.5 },
    );
  }, []);
  return <motion.div className="home-scroll">Scroll</motion.div>;
};
