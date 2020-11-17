export type Gameprice = {
  discount?: number;
  price: number;
};

export type Game = {
  id?: string;
  imageURL?: string;
  producer: string;
  title: string;
  price: Gameprice;
};

export type Banner = {
  imageURL: string;
  url: string;
};
