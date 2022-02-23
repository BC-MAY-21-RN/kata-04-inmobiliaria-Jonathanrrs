import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ScoreHouse = ({house}) => {
  return (
    <ImageBackground
      style={styles.houseBackground}
      imageStyle={styles.imageStyle}
      source={house.img}>
      <View style={styles.containerScore}>
        <Icon name="star" color="yellow" size={15} />
        <Text style={styles.numberScore}>{house.score}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  houseBackground: {
    width: 110,
    height: 110,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  containerScore: {
    backgroundColor: 'khaki',
    height: 25,
    width: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 50,
    alignItems: 'center',
    margin: 10,
  },
  numberScore: {
    color: 'chocolate',
    fontWeight: 'bold',
    opacity: 0.5,
  },
});
