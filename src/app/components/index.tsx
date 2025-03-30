import { spidermanfont } from "../fonts";
import { IHeroData } from "../interface/heroes";
import stiles from "./heroeslist.module.scss";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <h1 className={`${spidermanfont.className} ${stiles.title}`}>
        Characters
      </h1>
    </>
  );
}
