import React, {useEffect, useMemo} from 'react';
import {Linking, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {GameSearchItem} from '../../../domain/types';

import StackView from '../../components/stack-view';
import Carrousel from './components/carrousel';
import GameList from './components/game-list';
import SearchBar from './components/search-bar';
import CartButton from './components/cart-button';
import useHomeState from './hooks/use-home-state';

const Home = () => {
  const {games, banners, loadAllGames, loadAllBanners} = useHomeState();

  const items: GameSearchItem[] = [
    {id: 1, title: 'Zelda Breath of the Wild'},
    {id: 2, title: 'Super Metroid'},
    {id: 3, title: 'Hollow Night'},
    {id: 4, title: 'Chrono Trigger'},
  ];

  useEffect(() => {
    const fetch = async () => {
      await Promise.all([loadAllGames(), loadAllBanners()]);
    };
    fetch();
  }, []);

  const {header} = useMemo(() => {
    const header = (
      <View style={styles.bannerContainer}>
        <Carrousel
          banners={banners}
          onPress={({url}) => Linking.openURL(url)}
        />
      </View>
    );
    return {header};
  }, [banners]);

  return (
    <SearchBar
      style={styles.searchBar}
      items={items}
      isLoading={true}
      onSelectedItem={(item) => console.log(item)}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <StackView spacing={32}>
          <GameList
            games={games}
            header={header}
            onPress={(game) => console.log(game)}
          />
          <CartButton style={styles.cartButton} />
        </StackView>
      </SafeAreaView>
    </SearchBar>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#323232',
  },
  safeArea: {
    flex: 1,
    margin: 16,
  },
  bannerContainer: {
    marginBottom: 32,
  },
  cartButton: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
});

export default Home;
