import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const AboutHousePropertie = ({house}) => {
  return (
    <View style={styles.containerAbout}>
      <Text style={styles.nameHouse}>{house.name}</Text>
      <View style={styles.containerDirection}>
        <Icon name="location-outline" color="black" size={25} />
        <Text style={styles.direction}>{house.direction}</Text>
      </View>
      <View style={styles.containerAmount}>
        <View style={styles.containerAmoutInfo}>
          <Icon name="bed-outline" color="black" size={25} />
          <Text style={styles.amount}>{house.rooms}</Text>
        </View>
        <View style={styles.containerAmoutInfo}>
          <Icon name="water-outline" color="black" size={25} />
          <Text style={styles.amount}>{house.bathrooms}</Text>
        </View>
        <View style={styles.containerAmoutInfo}>
          <Icon name="expand-outline" color="black" size={25} />
          <Text style={styles.amount}>{house.surface}</Text>
        </View>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.surface}>${house.montlhyCost}/m</Text>
        <Icon name="heart-circle" color="green" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAbout: {
    flex: 1,
    marginHorizontal: 15,
  },
  nameHouse: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    color: 'black',
    alignItems: 'center',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  containerAmoutInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  direction: {
    color: 'black',
    marginLeft: 3,
  },
  surface: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  containerPrice: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
