import SearchGames from './search-games';

describe('Search Games Use Case', () => {
  it('must be return games list of if search successful', async () => {
    const search = await SearchGames('Zelda');
    expect(search).toStrictEqual([{id: 1, title: 'Zelda Breath of The Wild'}]);
  });

  it('must be return games list empty of if search have no results', async () => {
    const search = await SearchGames('bomberman');
    expect(search).toStrictEqual([]);
  });

  it('must be return games list empty of if query is empty', async () => {
    const search = await SearchGames('');
    expect(search).toEqual([]);
  });

  it('the search must not be case sensitive', async () => {
    const search = await SearchGames('donkey');
    expect(search).toStrictEqual([{id: 4, title: 'Donkey Kong'}]);
  });
});
