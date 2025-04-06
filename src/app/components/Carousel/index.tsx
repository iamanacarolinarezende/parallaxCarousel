"use client";

import { IHeroData } from "@/interface/heroes";
import HeroDetails from "../HeroDetails";
import styles from "./carousel.module.scss";
import { useEffect, useState } from "react";
import HeroPicture from "../HeroPicture";

interface IProps {
  heroes: IHeroData[];
  activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
  const [visibleItems, setVisibleItems] = useState<IHeroData[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activeId)
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
          {visibleItems.map((item) => (
            <div key={item.id} className={styles.hero}>
              <HeroPicture hero={item} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.details}>
        <HeroDetails data={heroes[0]} />
      </div>
    </div>
  );
}
