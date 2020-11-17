import {useCallback, useState} from 'react';
import LoadAllBanners from '../../../../../data/use-cases/banner/load-all-banners';
import LoadAllGames from '../../../../../data/use-cases/game/load-all-games';
import {Banner, Game} from '../../../../../domain/types';

const useHomeState = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);

  const loadAllGames = useCallback(async () => {
    const games = await LoadAllGames();
    setGames(games);
  }, [games]);

  const loadAllBanners = useCallback(async () => {
    const banners = await LoadAllBanners();
    setBanners(banners);
  }, [banners]);

  return {games, banners, loadAllGames, loadAllBanners};
};

export default useHomeState;
