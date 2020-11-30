import {useReducer} from 'react';
import LoadAllBanners from '../../services/use-cases/banner/load-all-banners';
import LoadAllGames from '../../services/use-cases/game/load-all-games';
import SearchGames from '../../services/use-cases/game/search-games';

import cartReduce, {State as CartReduceState} from './reducers/cart-reduce';

import gameSearchReduce, {
  State as GameSearchReduceState,
} from './reducers/game-search-reduce';

import bannerReduce, {
  State as BannerReduceState,
} from './reducers/banner-reduce';

import gamesReduce, {State as GamesState} from './reducers/games-reduce';

const cartInitialState: CartReduceState = {data: 0};
const gameSearchInitialState: GameSearchReduceState = {data: []};
const bannerInitialState: BannerReduceState = {data: []};
const gamesInitialState: GamesState = {data: []};

const useHomeState = () => {
  const [cartState, cartDispatch] = useReducer(cartReduce, cartInitialState);

  const [gameSearchState, gameSearchDispatch] = useReducer(
    gameSearchReduce,
    gameSearchInitialState,
  );

  const [bannerState, bannerDispatch] = useReducer(
    bannerReduce,
    bannerInitialState,
  );

  const [gamesState, gamesDispatch] = useReducer(
    gamesReduce,
    gamesInitialState,
  );

  const loadGames = async () => {
    gamesDispatch({type: 'games start'});
    try {
      const games = await LoadAllGames();
      gamesDispatch({type: 'games success', payload: games});
    } catch (error) {
      gamesDispatch({type: 'games fail', error});
    }
  };

  const loadBanners = async () => {
    bannerDispatch({type: 'banner start'});
    try {
      const items = await LoadAllBanners();
      bannerDispatch({type: 'banner success', payload: items});
    } catch (error) {
      bannerDispatch({type: 'banner fail', error});
    }
  };

  const search = async (query: string) => {
    gameSearchDispatch({type: 'search start'});
    try {
      const items = await SearchGames(query);
      gameSearchDispatch({type: 'search success', payload: items});
    } catch (error) {
      gameSearchDispatch({type: 'search fail', error});
    }
  };

  const incrementCount = () => {
    cartDispatch({type: 'increment start'});
    cartDispatch({type: 'increment success'});
  };

  return {
    gamesState,
    bannerState,
    gameSearchState,
    cartState,
    search,
    loadGames,
    loadBanners,
    incrementCount,
  };
};

export default useHomeState;
