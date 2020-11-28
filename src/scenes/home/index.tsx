import React, {useEffect, useMemo} from 'react';
import {Linking, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {StackView} from '../../components';
import {Carrousel, GameList, SearchBar, CartButton} from './components';
import useHomeState from './use-home-state';

const Home = () => {
  const {
    games,
    banners,
    searchGamesResponse,
    loadAllGames,
    loadAllBanners,
    search,
  } = useHomeState();

  const {
    items: searchGamesItems,
    isLoading: searchGamesIsLoading,
    error: searchGamesError,
  } = searchGamesResponse;

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
      items={searchGamesItems}
      isLoading={searchGamesIsLoading}
      onChangeText={(text) => search(text)}
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