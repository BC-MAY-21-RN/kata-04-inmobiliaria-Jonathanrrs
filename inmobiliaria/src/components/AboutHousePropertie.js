import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const AboutHousePropertie = () => {
  return (
    <View style={styles.containerAbout}>
      <Text style={styles.nameHouse}>The Willows</Text>
      <View style={styles.containerDirection}>
        <Icon name="location-outline" color="black" size={25} />
        <Text style={styles.direction}>3518 W. Gray St. Utica</Text>
      </View>
      <View style={styles.containerAmount}>
        <View style={styles.containerAmoutInfo}>
          <Icon name="bed-outline" color="black" size={25} />
          <Text style={styles.amount}>3</Text>
        </View>
        <View style={styles.containerAmoutInfo}>
          <Icon name="water-outline" color="black" size={25} />
          <Text style={styles.amount}>2</Text>
        </View>
        <View style={styles.containerAmoutInfo}>
          <Icon name="expand-outline" color="black" size={25} />
          <Text style={styles.amount}>230 ft</Text>
        </View>
      </View>
      <View style={styles.containerSurface}>
        <Text style={styles.surface}>$440/m</Text>
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
  containerSurface: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
