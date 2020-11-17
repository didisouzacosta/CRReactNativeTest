import React, {useEffect, useMemo} from 'react';
import {Linking, SafeAreaView, StyleSheet, View} from 'react-native';
import {StackView} from '../../components';
import Carrousel from './components/carrousel';

import GameList from './components/game-list';
import SearchBar from './components/search-bar';
import CartButton from './components/cart-button';
import useHomeState from './hooks/use-home-state';

const Home = () => {
  const {games, banners, loadAllGames, loadAllBanners} = useHomeState();

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
    <SafeAreaView style={styles.safeArea}>
      <StackView spacing={32} style={styles.container}>
        <SearchBar />
        <GameList
          games={games}
          header={header}
          onPress={(game) => console.log(game)}
        />
        <CartButton style={styles.cartButton} />
      </StackView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#323232',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  bannerContainer: {
    marginBottom: 32,
  },
  cartButton: {
    position: 'absolute',
    right: 40,
    bottom: 20,
  },
});

export default Home;
