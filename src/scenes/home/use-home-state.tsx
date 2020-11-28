import {useState} from 'react';
import LoadAllBanners from '../../data/use-cases/banner/load-all-banners';
import LoadAllGames from '../../data/use-cases/game/load-all-games';
import SearchGames from '../../data/use-cases/game/search-games';
import {Banner, Game, GameSearchItem} from '../../domain/types';

type SearchResultType = {
  error?: Error;
  isLoading?: boolean;
  items: GameSearchItem[];
};

const useHomeState = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [searchGamesResponse, setSearchGamesResponse] = useState<
    SearchResultType
  >({items: []});

  const loadAllGames = async () => {
    const games = await LoadAllGames();
    setGames(games);
  };

  const loadAllBanners = async () => {
    const banners = await LoadAllBanners();
    setBanners(banners);
  };

  const search = (query: string) => {
    setSearchGamesResponse((oldValue) => ({...oldValue, isLoading: true}));
    SearchGames(query)
      .then((items) =>
        setSearchGamesResponse((oldValue) => ({...oldValue, items})),
      )
      .finally(() =>
        setSearchGamesResponse((oldItem) => ({...oldItem, isLoading: false})),
      );
  };

  return {
    games,
    banners,
    searchGamesResponse,
    loadAllGames,
    loadAllBanners,
    search,
  };
};

export default useHomeState;
