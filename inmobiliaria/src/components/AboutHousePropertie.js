import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const AboutHousePropertie = ({house}) => {
  const PrintIconAndText = ({iconName, styleName, infoText}) => (
    <>
      <Icon name={iconName} color="black" size={25} />
      <Text style={styleName}>{infoText}</Text>
    </>
  );

  return (
    <View style={styles.containerAbout}>
      <Text style={styles.nameHouse}>{house.name}</Text>
      <View style={styles.containerDirection}>
        <PrintIconAndText
          iconName={'location-outline'}
          styleName={styles.direction}
          infoText={house.direction}
        />
      </View>
      <View style={styles.containerAmount}>
        <View style={styles.containerAmoutInfo}>
          <PrintIconAndText
            iconName={'bed-outline'}
            styleName={styles.amount}
            infoText={house.rooms}
          />
        </View>
        <View style={styles.containerAmoutInfo}>
          <PrintIconAndText
            iconName={'water-outline'}
            styleName={styles.amount}
            infoText={house.bathrooms}
          />
        </View>
        <View style={styles.containerAmoutInfo}>
          <PrintIconAndText
            iconName={'expand-outline'}
            styleName={styles.amount}
            infoText={house.surface}
          />
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
