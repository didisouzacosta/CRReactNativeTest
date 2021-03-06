import {Game} from '../../../domain/types';

const games: Game[] = [
  {
    title: 'Zelda Breath of The Wild',
    producer: 'Nintendo',
    imageURL:
      'https://www.nintenderos.com/wp-content/uploads/2018/08/the-legend-of-zelda-breath-of-the-wild.jpg',
    price: {
      discount: 0,
      price: 350,
    },
  },
  {
    title: 'Star Fox',
    producer: 'Nintendo',
    imageURL:
      'https://img.ibxk.com.br//2016/02/06/06092953905009.jpg?w=1200&h=675&mode=crop&scale=both',
    price: {
      discount: 100,
      price: 350,
    },
  },
  {
    title: 'Super Metroid',
    producer: 'Nintendo',
    imageURL:
      'https://cdn.inprnt.com/thumbs/38/e3/38e3dc31c478be4b290744acc17cbc0c.jpg?response-cache-control=max-age=2628000',
    price: {
      discount: 100,
      price: 200,
    },
  },
  {
    title: 'Hollow Night',
    producer: 'Nintendo',
    imageURL:
      'https://img.ibxk.com.br/2018/08/15/15121619540042.jpg?w=704&h=264&mode=crop&scale=both',
    price: {
      discount: 400,
      price: 350,
    },
  },
  {
    title: 'Donkey Kong',
    producer: 'Nintendo',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/71h5dWJt+XL.jpg',
    price: {
      discount: 100,
      price: 250,
    },
  },
  {
    title: 'Super Mario All Stars Delux',
    producer: 'Nintendo',
    imageURL:
      'https://webtudo.net/wp-content/uploads/2017/03/Super-Mario-Bros.jpg',
    price: {
      discount: 100,
      price: 350,
    },
  },
];

const LoadAllGames = async (): Promise<Game[]> => {
  return Promise.resolve(games);
};

export default LoadAllGames;
