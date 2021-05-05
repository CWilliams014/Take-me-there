import React from 'react';
import Card from './Card';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const EventList = ({ navigation }) => {
  const handleClick = (event, concertName, image) => {
    event.persist();
    navigation.navigate('EventProfile', { concertName, image });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.spaceBetween}>
          <Text style={styles.title}>Concerts Near You</Text>
          {/*<Button icon="notifications" />*/}
        </View>
        <View style={styles.wrapper}>
          <View style={styles.line} />
          {/*<View style={styles.line} />*/}
        </View>
      </View>
      <FlatList
        data={users}
        numColumns={2}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => (
          <Card
            handleClickPhoto={(e) => handleClick(e, item.name, item.uri)}
            item={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    flex: 1,
  },
  top: {
    padding: 20,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    // fontFamily: themes.fonts.B,
    color: '#A52A2A',
    alignItems: 'center',
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#F0FFFF',
  },
  subTitle: {
    width: 50,
    color: '#F0FFFF',
    textAlign: 'center',
    // fontFamily: themes.fonts.R,
  },
  card: {
    flexWrap: 'wrap',
  },
});

export const users = [
  {
    id: 1,
    uri: require('../images/BASSCENTERXI2018.jpeg'),
    name: 'ACDC',
    city: 'LA',
    love: true,
  },
  {
    id: 2,
    uri: require('../images/redRocksBack.jpeg'),
    name: 'Led Zeppelin',
    city: 'LA',
    love: false,
  },
  {
    id: 3,
    uri: require('../images/liveRandom.jpeg'),
    name: 'The Beatles',
    city: 'LA',
    love: false,
  },
  {
    id: 4,
    uri: require('../images/liveRandom2.jpeg'),
    name: 'Rolling Stones',
    city: 'LA',
    love: true,
  },
  {
    id: 5,
    uri: require('../images/BASSCENTERXI2018.jpeg'),
    name: 'ACDC',
    city: 'LA',
    love: true,
  },
  {
    id: 6,
    uri: require('../images/redRocksBack.jpeg'),
    name: 'Led Zeppelin',
    city: 'LA',
    love: false,
  },
  {
    id: 7,
    uri: require('../images/liveRandom.jpeg'),
    name: 'The Beatles',
    city: 'LA',
    love: false,
  },
  {
    id: 8,
    uri: require('../images/liveRandom2.jpeg'),
    name: 'Rolling Stones',
    city: 'LA',
    love: true,
  },
];

export default EventList;
