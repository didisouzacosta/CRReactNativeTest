import React, {useEffect, useMemo} from 'react';
import {Linking, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {StackView} from '../../components';
import {Banner} from '../../domain/types';
import {Carousel, GameList, SearchBar, CartButton} from './components';

import useHomeState from './use-home-state';

const renderHeader = (banners: Banner[]) => {
  return (
    <View style={styles.bannerContainer}>
      <Carousel banners={banners} onPress={({url}) => Linking.openURL(url)} />
    </View>
  );
};

const Home = () => {
  const {
    gamesState,
    bannerState,
    gameSearchState,
    cartState,
    search,
    loadGames,
    loadBanners,
    incrementCount,
  } = useHomeState();

  useEffect(() => {
    loadBanners();
    loadGames();
  }, []);

  return (
    <SearchBar
      style={styles.searchBar}
      items={gameSearchState.data}
      isLoading={gameSearchState.isLoading}
      onChangeText={(text) => search(text)}
      onSelectedItem={(item) => console.log(item)}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <StackView spacing={32}>
          <GameList
            games={gamesState.data}
            header={renderHeader(bannerState.data)}
            onPress={(game) => console.log(game)}
          />
          <CartButton
            style={styles.cartButton}
            isLoading={cartState.isLoading}
            count={cartState.data}
            onPress={incrementCount}
          />
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
