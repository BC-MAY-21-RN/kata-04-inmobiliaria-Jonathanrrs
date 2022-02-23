import React from 'react';
import {View, Text} from 'react-native';
import {ScoreHouse} from '../components/ScoreHouse';

export const HomeScreen = () => {
  return (
    <View style={{padding: 50}}>
      <ScoreHouse />
    </View>
  );
};
