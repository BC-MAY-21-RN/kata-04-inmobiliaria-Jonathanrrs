import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScoreHouse} from '../components/ScoreHouse';

export const HomeScreen = () => {
  return (
    <View style={styles.containerCard}>
      <ScoreHouse />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    margin: 20,
    padding: 15,
    backgroundColor: 'lightcyan',
    borderRadius: 10,
  },
});
