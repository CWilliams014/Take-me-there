import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Card = ({ handleClickPhoto, item }) => {
  const { title, venue, performers, drivingTime } = item;
  const image = performers[0].images.huge;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(e) => handleClickPhoto(e, title, image)}>
        <ImageBackground
          style={styles.image}
          imageStyle={styles.img}
          source={{ uri: image }}
        />
        <Text style={styles.time}>{drivingTime}</Text>

        <View style={styles.info}>
          <Text style={styles.text} ellipsizeMode="head">
            {title}, {venue.state}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: (width - 20) / 2 - 20,
    height: 250,
    padding: 10,
    marginVertical: 20,
    marginLeft: 15,
  },
  img: {
    borderRadius: 20,
  },
  info: {
    width: (width - 20) / 2 - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 2,
    height: 70,
    backgroundColor: '#96948ee3',
    padding: 12,
    // paddingBottom: 5,
    marginTop: -90,
    marginLeft: 15,
    marginBottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    // fontFamily: themes.fonts.M,
    fontSize: 16,
    color: 'white',
  },
  time: {
    ...StyleSheet.absoluteFillObject,
    top: 25,
    marginLeft: 20,
    color: 'white',
    fontWeight: 'bold',
    //right: 20,
    //alignSelf: 'flex-end',
  },
});

export default Card;
