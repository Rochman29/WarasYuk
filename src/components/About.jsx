import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [hasil, setHasil] = useState(null);
  const handleClick = () => {
    setHasil(
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="bacaan2 fw-bold fs-4 text-success shadow p-3 mb-5 bg-body-secondary rounded text-center"
        id="benarSekali"
      >
        Anda datang ke tempat yang tepat.
      </motion.div>
    );
    setTimeout(() => {
      setHasil(null);
    }, 3000);
  };
  return (
    <section id="about">
      <div className="section2">
        <div className="div-section2-atas">
          <motion.div
            variants={fadeIn("right", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            id="about"
            className="h1-section1"
          >
            <b>ABOUT WarasYuk</b>
          </motion.div>
        </div>
        <div className="div-section2-bawah">
          <motion.div
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="sect2-kiri"
          >
            <div className="div-picture2"></div>
          </motion.div>
          <div className="sect2-kanan">
            <motion.div
              variants={fadeIn("left", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className="bacaan2 fs-5"
            >
              Apakah Anda merasa stres, cemas, depresi, atau mengalami masalah
              psikologis lainnya? <br></br> Apakah Anda ingin belajar lebih
              banyak tentang kesehatan mental dan cara meningkatkannya?
              <br />
              <br />
              <Button variant="danger" onClick={handleClick}>
                Benar
              </Button>
              {hasil}
            </motion.div>

            <motion.div
              variants={fadeIn("up", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className="bacaan3 fw-sm fs-4"
            >
              WarasYuk adalah web kesehatan mental yang menyediakan layanan
              konseling, dan terapi online. Kami memiliki tim psikolog yang
              berpengalaman, kompeten, dan ramah yang siap membantu Anda
              mengatasi masalah psikologis yang Anda hadapi.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
