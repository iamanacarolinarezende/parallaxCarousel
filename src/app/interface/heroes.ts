export interface IHeroData {
  id: string;
  name: string;
  universe: number;
  details: {
    fullName: string;
    brthday: string;
    homeland: string;
    height: number;
    weight: number;
  };
}
