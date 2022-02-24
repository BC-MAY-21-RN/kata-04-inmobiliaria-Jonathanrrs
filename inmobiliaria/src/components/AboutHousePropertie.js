import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const AboutHousePropertie = ({house}) => {
  const PrintIcon = ({styleContainer, styleText, textInfo, nameIcon}) => (
    <View style={styleContainer}>
      <Icon name={nameIcon} color="black" size={25} />
      <Text style={styleText}>{textInfo}</Text>
    </View>
  );

  return (
    <View style={styles.containerAbout}>
      <Text style={styles.nameHouse}>{house.name}</Text>
      <PrintIcon
        styleContainer={styles.containerDirection}
        styleText={styles.direction}
        textInfo={house.direction}
        nameIcon="location-outline"
      />
      <View style={styles.containerAmount}>
        <PrintIcon
          styleContainer={styles.containerAmoutInfo}
          styleText={styles.amount}
          textInfo={house.rooms}
          nameIcon="bed-outline"
        />
        <PrintIcon
          styleContainer={styles.containerAmoutInfo}
          styleText={styles.amount}
          textInfo={house.bathrooms}
          nameIcon="water-outline"
        />
        <PrintIcon
          styleContainer={styles.containerAmoutInfo}
          styleText={styles.amount}
          textInfo={house.surface}
          nameIcon="expand-outline"
        />
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.price}>{house.montlhyCost}</Text>
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
  price: {
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
