import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Insomnia = () => {
  const navigate = useNavigate();
  // kiri -> getter
  // kanan -> setter
  const [nomor, setNomor] = useState(1);
  const [judul, setJudul] = useState("");
  const [materi, setMateri] = useState("");

  useEffect(() => {
    if (nomor === 1) {
      setJudul("Meditasi Kesadaran Nafas");
    } else {
      setJudul("Meditasi Mindfulness");
    }
  }, [nomor]);

  useEffect(() => {
    if (nomor === 1) {
      setMateri(
        <motion.div
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
        >
          <p>
            1. Carilah tempat yang tenang agar Anda dapat bermeditasi tanpa
            gangguan. <br />
            2. Duduklah dalam posisi yang nyaman dengan punggung lurus.
            <br />
            3. Tarik napas dalam-dalam melalui hidung dan rasakan udara masuk ke
            dalam tubuh Anda. <br />
            4. Alihkan perhatian Anda sepenuhnya pada sensasi pernapasan.
            Rasakan udara masuk dan keluar dari tubuh Anda. <br />
            5. Jika pikiran Anda melayang ke arah lain, biarkan saja dan
            kembalikan fokus Anda pada pernapasan. <br />
            6. Lakukan meditasi kesadaran napas ini secara teratur, idealnya
            setiap hari, untuk mendapatkan manfaat yang maksimal
          </p>
        </motion.div>
      );
    } else {
      setMateri(
        <motion.div
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
        >
          <p>
            1. Pilih tempat yang nyaman dan rileks untuk melakukan meditasi,
            seperti ruangan yang sopan atau area di luar ruangan yang
            menyenangkan. <br />2 Lanskapkan waktu yang sesuai untuk meditasi
            Anda, seperti 5-10 menit setiap hari. <br />
            3. Berhati pada pernapasan Anda dan mencoba memainkan pernapasan
            dengan tujuan yang kuat. <br />
            4. Jika pikiran menghabiskan, atau Anda merasa kesulitan untuk fokus
            pada pernapasan, mencoba untuk mengembalikan pikiran ke fokus pada
            pernapasan. <br />
            5. Setelah meditasi, berdiri dengan hatim yang rileks dan perhatian
            penuh pada pernapasan Anda
          </p>
        </motion.div>
      );
    }
  });

  return (
    <div>
      <div className="container-meditation">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <motion.div
            variants={fadeIn("left", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
          >
            <div className="title">Meditation for Insomnia</div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
          >
            <div className="insomnia-bg"></div>
          </motion.div>
        </div>
        <div className="d-flex flex-row justify-content-around w-">
          <div className="d-flex flex-column">
            <div>
              <Card style={{ width: "70rem", height: "20rem" }}>
                <Card.Header>
                  <Nav
                    variant="pills"
                    defaultActiveKey="#first"
                    className="d-flex flex-row justify-content-between"
                  >
                    <motion.div
                      variants={fadeIn("up", 1.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.9 }}
                      className="d-flex flex-row"
                    >
                      <Nav.Item>
                        <Nav.Link href="#1" onClick={() => setNomor(1)}>
                          1
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#2" onClick={() => setNomor(2)}>
                          2
                        </Nav.Link>
                      </Nav.Item>
                    </motion.div>
                    <div className="tombol-card">
                      <motion.div
                        variants={fadeIn("left", 1.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.9 }}
                        className="tombol-video"
                      >
                        <Button
                          href="https://youtu.be/0Qm7A-IOjMc"
                          target="_blank"
                        >
                          Video 1
                        </Button>
                        <Button
                          href="https://youtu.be/4wKh265mCiA?si=paEtRV0ntFmSY3Bk"
                          target="_blank"
                        >
                          Video 2
                        </Button>
                        <Button
                          href="https://youtu.be/QnmLL6YBthM?si=zeR3H3LbEexQfq4L"
                          target="_blank"
                        >
                          Video 3
                        </Button>
                      </motion.div>
                      <motion.div
                        variants={fadeIn("left", 1.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.9 }}
                      >
                        <Button onClick={() => navigate("/home")}>Back</Button>
                      </motion.div>
                    </div>
                  </Nav>
                </Card.Header>
                <Card.Body className="d-flex flex-column justify-content-between bg-dark">
                  <motion.div
                    variants={fadeIn("right", 1.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.9 }}
                  >
                    <Card.Title className="text-white">{judul}</Card.Title>
                    <Card.Text className="text-white">{materi}</Card.Text>
                  </motion.div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insomnia;
