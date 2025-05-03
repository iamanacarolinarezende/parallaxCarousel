"use client";

import { IHeroData } from "@/interface/heroes";
import HeroDetails from "../HeroDetails";
import styles from "./carousel.module.scss";
import { useEffect, useState } from "react";
import HeroPicture from "../HeroPicture";
import { AnimatePresence, motion } from "framer-motion";
import { filter } from "framer-motion/client";

enum enPosition {
  FRONT = 0,
  MIDDLE = 1,
  BACK = 2,
}

interface IProps {
  heroes: IHeroData[];
  activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
  const [visibleItems, setVisibleItems] = useState<IHeroData[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activeId) - 1
  );

  useEffect(() => {
    //guarantees the array limit
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length;

    // infinit images inside carousel by 3
    const visibleItems = [...heroes, ...heroes].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );
    setVisibleItems(visibleItems);
  }, [heroes, activeIndex]);

  useEffect(() => {
    const htmlEl = document.querySelector("html");

    if (!htmlEl || !visibleItems) {
      return;
    }

    const currentHeroId = visibleItems[enPosition.MIDDLE].id;
    htmlEl.style.backgroundImage = `url("/spiders/${currentHeroId}-background.png")`;
    htmlEl.classList.add("hero-page");

    return () => {
      htmlEl.classList.remove("hero-page");
    };
  }, [visibleItems]);

  //change hero at carousel, if + clockwise or if - counterclockwise
  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  if (!visibleItems) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapper}
          onClick={() => handleChangeActiveIndex(1)}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, position) => (
              <motion.div
                key={item.id}
                className={styles.hero}
                initial={{ x: -1500, scale: 0.75 }}
                animate={{ x: 0, ...getItemStyles(position) }}
                exit={{ x: 0, opacity: 0, scale: 1, left: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <HeroPicture hero={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className={styles.details}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <HeroDetails data={visibleItems[enPosition.MIDDLE]} />
      </motion.div>
    </div>
  );
}

const getItemStyles = (position: enPosition) => {
  if (position === enPosition.FRONT) {
    return {
      zIndex: 3,
      filter: "blur(10px)",
      scale: 1.2,
    };
  }

  if (position === enPosition.MIDDLE) {
    return {
      zIndex: 2,
      left: 310,
      scale: 0.8,
      top: "-10%",
    };
  }

  return {
    zIndex: 1,
    filter: "blur(10px)",
    left: 160,
    top: "-20%",
    scale: 0.6,
    opacity: 0.8,
  };
};
