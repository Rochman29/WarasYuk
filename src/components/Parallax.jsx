"use client";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import styles from "../style/Parallax.module.scss";
import Lenis from "@studio-freight/lenis";

const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

export default function Parallax() {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ["start end", "end start"],
  });
  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);

    requestAnimationFrame(raf);

    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[4], images[2]]} y={y} />

          <Column images={[images[1], images[5], images[3]]} y={y2} />

          <Column images={[images[2], images[0], images[4]]} y={y3} />

          <Column images={[images[3], images[1], images[5]]} y={y4} />
        </div>
      </div>

      <div className={styles.spacer}></div>
    </main>
  );
}
const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <img src={`/img/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
