export type Gameprice = {
  discount?: number;
  price: number;
};

export type Game = {
  id?: number;
  imageURL?: string;
  producer: string;
  title: string;
  price: Gameprice;
};

export type GameSearchItem = Pick<Required<Game>, 'id' | 'title'>;

export type Banner = {
  imageURL: string;
  url: string;
};
