import { spidermanfont } from "@/fonts";
import { IHeroData } from "@/interface/heroes";
import styles from "./heroDetails.module.scss";
import { Quicksand } from "next/font/google";
import { details } from "framer-motion/client";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface IProps {
  data: IHeroData;
}

export default function HeroDetails({ data }: IProps) {
  const { id, name, universe, details } = data;

  return (
    <div className={quicksand.className}>
      <h1 className={`${spidermanfont.className} ${styles.title}`}>
        {name} (Universo-{universe})
      </h1>

      <div className={styles.details}>
        <h2 className={styles.subtitle}>Details</h2>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Full Name </td>
              <td>{details.fullName}</td>
            </tr>
            <tr>
              <td className={styles.label}>Birthday </td>
              <td>
                {new Date(details.birthday).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </td>
            </tr>
            <tr>
              <td className={styles.label}>Homeland </td>
              <td>{details.homeland}</td>
            </tr>
            <tr>
              <td className={styles.label}>Height </td>
              <td>{details.height.toFixed(2)}m</td>
            </tr>
            <tr>
              <td className={styles.label}>Weight </td>
              <td>{details.weight.toFixed(2)}kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>First Appearance</h2>
        <Image
          src={`/spiders/${id}-comic-book.png`}
          alt={`First appearance at comic book ${name} at universe ${universe}`}
          width={80}
          height={122}
        />
      </div>
    </div>
  );
}
