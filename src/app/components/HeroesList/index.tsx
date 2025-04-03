"use client";

import { spidermanfont } from "@/fonts";
import { IHeroData } from "@/interface/heroes";

import styles from "@/components/HeroesList/heroeslist.module.scss";
import HeroPicture from "@/components/HeroPicture";
import { motion } from "framer-motion";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <motion.h1
        className={`${spidermanfont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Characters
      </motion.h1>
      <motion.section
        className={styles.heroes}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
          >
            <HeroPicture hero={hero} />
          </div>
        ))}
      </motion.section>
    </>
  );
}
