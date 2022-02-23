import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AboutHousePropertie} from '../components/AboutHousePropertie';
import {ScoreHouse} from '../components/ScoreHouse';

export const HomeScreen = () => {
  return (
    <View style={styles.containerCard}>
      <ScoreHouse />
      <AboutHousePropertie />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    margin: 20,
    padding: 15,
    backgroundColor: 'lightcyan',
    borderRadius: 15,
    // flex: 1,
    flexDirection: 'row',
  },
});
