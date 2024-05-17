import { motion } from "framer-motion";

export const SlideLeft = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      style={{ opacity: 0, transform: "translateX(50px)" }}
      whileInView={{ opacity: 1, transform: "translateX(0)" }}
      transition={{ delay: 0.2, transition: "1 ease-in-out" }}
      viewport={{ once: true }}
    >
      {children}{" "}
    </motion.div>
  );
};

export const SlideRight = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      style={{ opacity: 0, transform: "translateX(-50px)" }}
      whileInView={{ opacity: 1, transform: "translateX(0)" }}
      transition={{ delay: 0.2, transition: "1 ease-in-out" }}
      viewport={{ once: true }}
    >
      {children}{" "}
    </motion.div>
  );
};

export const SlideUp = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      style={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      transition={{ delay: 0.2, transition: "1 ease-in-out" }}
      viewport={{ once: true }}
    >
      {children}{" "}
    </motion.div>
  );
};
