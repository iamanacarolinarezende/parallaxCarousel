import { spidermanfont } from "@/fonts";
import { IHeroData } from "@/interface/heroes";
import styles from "./heroeslist.module.scss";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <h1 className={`${spidermanfont.className} ${styles.title}`}>
        Characters
      </h1>
    </>
  );
}
