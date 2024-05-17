import { motion } from "framer-motion";

export default function Header({ children }) {
  return (
    <motion.h1
      style={{ fontSize: "3em", opacity: 0, transform: "translateX(-50px)" }}
      whileInView={{ opacity: 1, transform: "translateX(0)" }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, transition: "1s ease-in-out" }}
      className="header"
    >
      {children}
    </motion.h1>
  );
}

export function StaticHeader({ children }) {
  return (
    <motion.h1 className="header" style={{ fontSize: "3em" }}>
      {children}
    </motion.h1>
  );
}
