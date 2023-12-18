import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Thanks = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: "../assets/img/bg.jpg" }}>
      <div className="thanks-body">
        <motion.div
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="xl title "
        >
          Send Successfully
        </motion.div>
        <motion.div
          variants={fadeIn("right", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="body-img"
        ></motion.div>
        <div className="d-flex flex-column justify-content-center align-items-center text-dark">
          <motion.div
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
          >
            <h4 className="text-black">Thank You For Using Our Service</h4>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
          >
            Please check your email in 24 hours we will send you a reply as soon
            as possible
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="d-flex justify-content-center align-item-center"
      >
        <Button onClick={() => navigate("/home")}>Back to Home</Button>
      </motion.div>
    </div>
  );
};
export default Thanks;
