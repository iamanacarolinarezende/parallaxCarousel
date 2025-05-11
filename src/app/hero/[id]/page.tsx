import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interface/heroes";

export default async function Hero({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const heroes = await getHeroesData();

  return <Carousel heroes={heroes.data} activeId={id} />;
}

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/heroes`);

  if (!res.ok) {
    throw new Error("Fail to request heroes list");
  }

  return res.json();
}
