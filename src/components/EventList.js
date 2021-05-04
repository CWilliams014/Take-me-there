import React from 'react';
import Card from './Card';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const EventList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.spaceBetween}>
          <Text style={styles.title}>Matches</Text>
          {/*<Button icon="notifications" />*/}
        </View>
        <View style={styles.wrapper}>
          <View style={styles.line} />
          <View>
            <Text style={styles.subTitle}>Today</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <FlatList
        data={users}
        numColumns={2}
        keyExtractor={(data) => data.id}
        renderItem={(data) => <Card handleClickPhoto={() => {}} {...data} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
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
    uri: require('../images/1.jpeg'),
    name: 'Ariel',
    age: 22,
    love: true,
  },
  {
    id: 2,
    uri: require('../images/2.jpeg'),
    name: 'Madelina',
    age: 20,
    love: false,
  },
  {
    id: 3,
    uri: require('../images/3.jpeg'),
    name: 'Jessie',
    age: 20,
    love: false,
  },
  {
    id: 4,
    uri: require('../images/4.jpeg'),
    name: 'Kathy',
    age: 24,
    love: true,
  },
];

export default EventList;
