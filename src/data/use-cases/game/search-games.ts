import {GameSearchItem} from '../../../domain/types';

const games: GameSearchItem[] = [
  {
    id: 1,
    title: 'Zelda Breath of The Wild',
  },
  {
    id: 2,
    title: 'Super Metroid',
  },
  {
    id: 3,
    title: 'Hollow Night',
  },
  {
    id: 4,
    title: 'Donkey Kong',
  },
  {
    id: 5,
    title: 'Super Mario All Stars Delux',
  },
  {
    id: 6,
    title: 'Star Fox',
  },
];

const SearchGames = async (query: string) => {
  if (!query) return Promise.resolve([]);

  return new Promise<GameSearchItem[]>((resolve, _) => {
    const result = games.filter((game) =>
      game.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );

    setTimeout(() => {
      resolve(result);
    }, 200);
  });
};

export default SearchGames;
