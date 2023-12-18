import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <section id="home">
      <div className="section1">
        <div className="div-kiri">
          <div className="div-kiri-atas">
            <div className="div-kiri-atas-1">
              <motion.div
                variants={fadeIn("up", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                className="h1-section1"
              >
                Experience True Happiness with the Best in Mental Health Care
              </motion.div>
            </div>
            <div className="div-kiri-atas-2">
              <motion.div
                variants={fadeIn("right", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                className="bacaan1"
              >
                Wherever You Are, Wherever You Need - Our Proficient
                Psychologies Offer a Helping Hand
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("left", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className="div-kiri-atas-3"
            >
              <Button variant="danger" onClick={() => navigate("/conseling")}>
                Try Conseling
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("left", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
        >
          <img
            className="div-picture1"
            src="./src/assets/img/picture1.png"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
