import {useState} from 'react';
import LoadAllBanners from '../../../../../data/use-cases/banner/load-all-banners';
import LoadAllGames from '../../../../../data/use-cases/game/load-all-games';
import SearchGames from '../../../../../data/use-cases/game/search-games';
import {Banner, Game, GameSearchItem} from '../../../../../domain/types';

const useHomeState = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [searchItems, setSearchItems] = useState<GameSearchItem[]>([]);
  const [searching, setSearching] = useState(false);

  const loadAllGames = async () => {
    const games = await LoadAllGames();
    setGames(games);
  };

  const loadAllBanners = async () => {
    const banners = await LoadAllBanners();
    setBanners(banners);
  };

  const search = (query: string) => {
    setSearching(true);
    SearchGames(query)
      .then((response) => setSearchItems(response))
      .finally(() => setSearching(false));
  };

  return {
    games,
    banners,
    searching,
    searchItems,
    loadAllGames,
    loadAllBanners,
    search,
  };
};

export default useHomeState;
