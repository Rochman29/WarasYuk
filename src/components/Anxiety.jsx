import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Anxiety = () => {
  const navigate = useNavigate();
  // kiri -> getter
  // kanan -> setter
  const [nomor, setNomor] = useState(1);
  const [judul, setJudul] = useState("");
  const [materi, setMateri] = useState("");

  useEffect(() => {
    if (nomor === 1) {
      setJudul("Visualisasi Cahaya Matahari");
    } else {
      setJudul("Fokus Pada Pernafasan");
    }
  }, [nomor]);

  useEffect(() => {
    if (nomor === 1) {
      setMateri(
        <p>
          1. Tempatkan diri di tempat yang nyaman dan rileks, seperti ruangan
          yang sopan atau area di luar ruangan yang menyenangkan.
          <br />
          2. Duduk dengan postur tubuh yang nyaman, seperti duduk atau berduduk,
          dan tangga dengan tegang yang merasa nyaman, fokus pada pernapasan
          Anda
          <br />
          3. Pilih suara yang menenangkan, seperti suara alam, untuk membantu
          Anda fokus pada visualisasi.
          <br />
          4. Mulai dengan visualisasi cahaya matahari pada area wajah Anda atau
          di tempat yang Anda sedang sebenarnya. Anda bisa menggunakan gambar
          atau video yang menampilkan cahaya matahari untuk membantu Anda dalam
          visualisasi.
          <br />
          5. Fokus pada cahaya matahari dan bayangkan Anda berduduk di tempat
          yang menyenangkan dengan cahaya matahari. Latihan visualisasi cahaya
          matahari sebanyak mungkin untuk mengkuatkan keterampilan Anda dalam
          mengatasi gangguan kecemasan.
        </p>
      );
    } else {
      setMateri(
        <p>
          1. Tentukan tempat yang tenang dan nyaman untuk meditasi, Pilih posisi
          duduk yang nyaman dengan punggung lurus.
          <br />
          2. Lakukan beberapa tarikan napas dalam dan hembusan perlahan untuk
          merilekskan tubuh. Tutup mata dan fokuslah pada pernapasan alami Anda.
          <br />
          3. Rasakan aliran udara yang masuk dan keluar dari tubuh. Anda juga
          dapat memberikan hitungan saat tarikan napas dan hembusan untuk
          membantu menjaga fokus.
          <br />
          4. Jika pikiran mulai melayang, bawa kembali fokus Anda pada
          pernapasan.
          <br />
          5. Biarkan pikiran yang mengembara lewat tanpa mengikutinya.
          <br />
          6. Mulailah dengan meditasi selama 5-10 menit, dan perlahan-lahan
          tingkatkan durasinya seiring waktu.
          <br />
          7. Ketika meditasi selesai, buka mata perlahan dan rasakan perbedaan
          dalam tubuh dan pikiran Anda.
        </p>
      );
    }
  });

  return (
    <div>
      <div className="container-meditation">
        <motion.div
          variants={fadeIn("left", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="title">Meditation for Anxiety</div>
          <div className="anxiety-bg">
            <img
              className="gambar2"
              src="../src/assets/img/meditation3.png"
              alt=""
            />
          </div>
        </motion.div>
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
                          href="https://youtu.be/J5o10EZBjDY?si=wrCSv2hh7e5VD2Ip"
                          target="_blank"
                        >
                          Video 1
                        </Button>
                        <Button
                          href="https://youtu.be/4ffr26sUTLI?si=7dpKeu8o_YZiDsgp"
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
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anxiety;
