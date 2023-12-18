import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Meditation = () => {
  const navigate = useNavigate();
  return (
    <section id="meditation">
      <div class="section2">
        <div class="div-section2-atas">
          <motion.div
            variants={fadeIn("left", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            id="about"
            class="h1-section1"
          >
            <b>MEDITATION</b>
          </motion.div>
        </div>
        <div class="div-section3-bawah">
          <div className="div-card">
            <motion.div
              variants={fadeIn("right", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className="cardImage1"
            ></motion.div>
            <Card style={{ width: "18rem", height: "20rem" }}>
              <motion.div
                variants={fadeIn("right", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
              >
                <Card.Body>
                  <Card.Title>Meditation for Insomnia</Card.Title>
                  <Card.Text>
                    <div>Meditasi Kesadaran Nafas</div>
                    <div>Meditasi Mindfulness</div>
                  </Card.Text>
                  <Button
                    onClick={() => navigate("/insomnia")}
                    variant="primary"
                  >
                    More Information
                  </Button>
                </Card.Body>
              </motion.div>
            </Card>
          </div>
          <div className="div-card">
            <motion.div
              variants={fadeIn("up", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className="cardImage2"
            ></motion.div>
            <Card style={{ width: "18rem", height: "20rem" }}>
              <motion.div
                variants={fadeIn("up", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
              >
                <Card.Body>
                  <Card.Title>Meditation for Depression</Card.Title>
                  <Card.Text>
                    <div>Loving-kidness Meditation</div>
                    <div>Breath Awareness Meditation</div>
                  </Card.Text>
                  <Button
                    onClick={() => navigate("/depression")}
                    variant="primary"
                  >
                    More Information
                  </Button>
                </Card.Body>
              </motion.div>
            </Card>
          </div>
          <div className="div-card">
            <motion.div
              variants={fadeIn("left", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className="cardImage3"
            ></motion.div>
            <Card style={{ width: "18rem", height: "20rem" }}>
              <motion.div
                variants={fadeIn("left", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
              >
                <Card.Body>
                  <Card.Title>Meditation for Anxiety</Card.Title>
                  <Card.Text>
                    <div>Visualisasi Cahaya Matahari</div>
                    <div>Fokus Pada Pernafasan</div>
                  </Card.Text>
                  <Button
                    onClick={() => navigate("/anxiety")}
                    variant="primary"
                  >
                    More Information
                  </Button>
                </Card.Body>
              </motion.div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Meditation;
