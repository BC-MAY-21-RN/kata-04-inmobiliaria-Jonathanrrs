import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {AboutHousePropertie} from '../components/AboutHousePropertie';
import {ScoreHouse} from '../components/ScoreHouse';
import {api} from '../api/housesProperties';

export const HomeScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.containerCard}>
      <ScoreHouse house={item} />
      <AboutHousePropertie house={item} />
    </View>
  );

  return (
    <View style={styles.containerMain}>
      <FlatList
        data={api}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    margin: 20,
    padding: 15,
    backgroundColor: 'lightcyan',
    borderRadius: 15,
    flexDirection: 'row',
  },
  containerMain: {
    backgroundColor: 'white',
  },
});
