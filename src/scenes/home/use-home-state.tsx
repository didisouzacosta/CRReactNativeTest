import {useReducer, useState} from 'react';
import LoadAllBanners from '../../data/use-cases/banner/load-all-banners';
import LoadAllGames from '../../data/use-cases/game/load-all-games';
import SearchGames from '../../data/use-cases/game/search-games';
import {Game} from '../../domain/types';

import cartReduce, {State as CartReduceState} from './reducers/cart-reduce';

import gameSearchReduce, {
  State as GameSearchReduceState,
} from './reducers/game-search-reduce';

import bannerReduce, {
  State as BannerReduceState,
} from './reducers/banner-reduce';

import gamesReduce, {State as GamesState} from './reducers/games-reduce';

const cartInitialState: CartReduceState = {count: 0};
const gameSearchInitialState: GameSearchReduceState = {items: []};
const bannerInitialState: BannerReduceState = {items: []};
const gamesInitialState: GamesState = {items: []};

const useHomeState = () => {
  const [cartState, cartDispatch] = useReducer(cartReduce, cartInitialState);

  const [gameSearchState, gameSearchDispach] = useReducer(
    gameSearchReduce,
    gameSearchInitialState,
  );

  const [bannerState, bannerDispach] = useReducer(
    bannerReduce,
    bannerInitialState,
  );

  const [gamesState, gamesDispach] = useReducer(gamesReduce, gamesInitialState);

  const loadGames = async () => {
    gamesDispach({type: 'games start'});
    try {
      const games = await LoadAllGames();
      gamesDispach({type: 'games success', payload: games});
    } catch (error) {
      gamesDispach({type: 'games fail', error});
    }
  };

  const loadBanners = async () => {
    bannerDispach({type: 'banner start'});
    try {
      const items = await LoadAllBanners();
      bannerDispach({type: 'banner success', payload: items});
    } catch (error) {
      bannerDispach({type: 'banner fail', error});
    }
  };

  const search = async (query: string) => {
    gameSearchDispach({type: 'search start'});
    try {
      const items = await SearchGames(query);
      gameSearchDispach({type: 'search success', payload: items});
    } catch (error) {
      gameSearchDispach({type: 'search fail', error});
    }
  };

  const incrementCount = async () => {
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
