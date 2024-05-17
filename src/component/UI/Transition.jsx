import { motion } from "framer-motion";

export default function transition(OGComponent) {
  return () => (
    <>
      <motion.div
        key="transition"
        className="fade-in"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ transition: "1s ease-in-out" }}
      >
        <OGComponent />
      </motion.div>
    </>
  );
}
