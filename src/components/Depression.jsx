import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Depression = () => {
  const navigate = useNavigate();
  // kiri -> getter
  // kanan -> setter
  const [nomor, setNomor] = useState(1);
  const [judul, setJudul] = useState("");
  const [materi, setMateri] = useState("");

  useEffect(() => {
    if (nomor === 1) {
      setJudul("Loving-kidness Meditation");
    } else {
      setJudul("Breath Awareness Meditation");
    }
  }, [nomor]);

  useEffect(() => {
    if (nomor === 1) {
      setMateri(
        <p>
          1. Pilih tempat yang nyaman dan rileks untuk melakukan meditasi,
          seperti ruangan yang sopan atau area di luar ruangan yang menyenangkan
          <br />
          2. Lanskapkan waktu yang sesuai untuk meditasi Anda, seperti 5-10
          menit setiap hari.
          <br />
          3. Berhati pada pernapasan Anda dan mencoba memainkan pernapasan
          dengan tujuan yang kuat
          <br />
          4. Mulailah dengan memvisualisasikan diri sendiri dan mengucapkan
          kalimat-kalimat positif seperti "Semoga saya bahagia, sehat, dan
          damai" atau "Saya mencintai diri saya dan menerima diri saya apa
          adanya". Kemudian, perluas lingkaran cinta kasih Anda dengan
          memvisualisasikan orang yang Anda cintai, teman, kenalan, dan bahkan
          orang yang mungkin Anda tidak suka
          <br />
          5. Ucapkan kalimat-kalimat positif seperti "Semoga Anda bahagia,
          sehat, dan damai" atau "Saya mencintai Anda dan menerima Anda apa
          adanya" untuk diri sendiri dan orang lain yang Anda visualisasikan
        </p>
      );
    } else {
      setMateri(
        <p>
          1. Pilih tempat yang nyaman dan rileks untuk melakukan meditasi,
          seperti ruangan yang sopan atau area di luar ruangan yang
          menyenangkan.
          <br />
          2. Lanskapkan waktu yang sesuai untuk meditasi Anda, seperti 5-10
          menit setiap hari.
          <br />
          3. Duduk dengan nyaman dengan punggung lurus dan bahu rileks. Anda
          dapat duduk di kursi atau di atas bantal meditasi.
          <br />
          4. Fokus pada pernapasan Anda dan mencoba memainkan pernapasan dengan
          tujuan yang kuat. Anda dapat memperhatikan sensasi napas di hidung
          atau di perut.
          <br />
          5. Jika pikiran menghabiskan, atau Anda merasa kesulitan untuk fokus
          pada pernapasan, mencoba untuk mengembalikan pikiran ke fokus pada
          pernapasan.
          <br />
          6. Ulangi fokus pada pernapasan selama beberapa menit, mencoba untuk
          mempertahankan konsentrasi Anda pada pernapasan.
        </p>
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
            <div className="title">Meditation for Depression</div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="depression-bg"
          >
            <img
              className="gambar2"
              src="/img/meditation2.png"
              alt=""
            />
          </motion.div>
        </div>
        <div className="d-flex flex-row justify-content-around w-">
          <div className="d-flex flex-column">
            <div>
              <Card style={{ width: "70rem", height: "21rem" }}>
                <Card.Header>
                  <Nav
                    variant="pills"
                    defaultActiveKey="#first"
                    className="d-flex flex-row justify-content-between"
                  >
                    <motion.div
                      variants={fadeIn("down", 1.2)}
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
                    <motion.div
                      variants={fadeIn("down", 1.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.9 }}
                      className="tombol-card"
                    >
                      <div className="tombol-video">
                        <Button
                          href="https://youtu.be/3_Ts47em5W4?si=HGgqviRI9xVG0mPT"
                          target="_blank"
                        >
                          Video 1
                        </Button>
                        <Button
                          href="https://youtu.be/pDiIMiaKYkA?si=Y1b6yGtiJ03t-yZn"
                          target="_blank"
                        >
                          Video 2
                        </Button>
                      </div>
                      <div>
                        <Button onClick={() => navigate("/home")}>Back</Button>
                      </div>
                    </motion.div>
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
                  <div className="d-flex flex-row justify-content-around"></div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depression;
