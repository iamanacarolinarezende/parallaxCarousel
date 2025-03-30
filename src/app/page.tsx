import HeroesList from "./components";
import { IHeroData } from "./interface/heroes";

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if (!res.ok) {
    throw new Error("Fail to request heroes list");
  }

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesData();

  return <HeroesList heroes={heroes.data} />;
}
