import { IHeroData } from "@/interface/heroes";
import Image, { StaticImageData } from "next/image";

import Imagespiderman616 from "@public/spiders/spider-man-616.png";
import Imagespiderwoman65 from "@public/spiders/mulher-aranha-65.png";
import Imagespiderman1610 from "@public/spiders/spider-man-1610.png";
import Imagespdr14512 from "@public/spiders/sp-dr-14512.png";
import Imagespiderham8311 from "@public/spiders/spider-ham-8311.png";
import Imagespiderman90214 from "@public/spiders/spider-man-90214.png";
import Imagespiderman928 from "@public/spiders/spider-man-928.png";

const heroesImage: Record<string, StaticImageData> = {
  "spider-man-616": Imagespiderman616,
  "spider-woman-65": Imagespiderwoman65,
  "spider-man-1610": Imagespiderman1610,
  "sp-dr-14512": Imagespdr14512,
  "spider-ham-8311": Imagespiderham8311,
  "spider-man-90214": Imagespiderman90214,
  "spider-man-928": Imagespiderman928,
};

interface IProps {
  hero: IHeroData;
}

export default function HeroPicture({ hero }: IProps) {
  return (
    <Image
      src={heroesImage[hero.id]}
      alt={`${hero.name} (Universe-${hero.universe})`}
      priority
    />
  );
}
