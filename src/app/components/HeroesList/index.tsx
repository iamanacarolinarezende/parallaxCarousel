import { spidermanfont } from "@/fonts";
import { IHeroData } from "@/interface/heroes";

import styles from "@/components/HeroesList/heroeslist.module.scss";
import HeroPicture from "@/components/HeroPicture";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <h1 className={`${spidermanfont.className} ${styles.title}`}>
        Characters
      </h1>
      <section className={styles.heroes}>
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
          >
            <HeroPicture hero={hero} />
          </div>
        ))}
      </section>
    </>
  );
}
