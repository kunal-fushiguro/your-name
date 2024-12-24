import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backgroundColor: "white",
          color: "black",
          textAlign: "center",
          padding: "20px",
          //   position: "fixed",
          bottom: 0,
          width: "100%",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ margin: 0 }}>Kunal</h3>
        <p style={{ margin: 0, fontSize: "14px", fontStyle: "italic" }}>
          "Every story begins with a step, and every journey leads to a legacy."
        </p>
      </motion.footer>
    </div>
  );
};

export default Footer;
