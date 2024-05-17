import { motion } from "framer-motion";
export default function P({ children, theme }) {
  const color = (theme) => {
    if (theme === "dark") return "#d8dee9";
    if (theme === "light") return "#4c566a";
    else return "#d8dee9";
  };
  return (
    <motion.p
      style={{
        lineHeight: "1.5em",
        color: color(theme),
      }}
    >
      {children}
    </motion.p>
  );
}
