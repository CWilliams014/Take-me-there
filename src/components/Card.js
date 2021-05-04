import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import { width } from '../helpers';
// import themes from '../themes';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Card = ({ handleClickPhoto, item }) => {
  const { name, love, city, uri } = item;
  // console.log('Card name ITEM:', item);
  return (
    <TouchableOpacity
      onPress={(e, name, uri) => handleClickPhoto(e, name, uri)}
    >
      <ImageBackground
        style={styles.image}
        imageStyle={styles.img}
        source={uri}
      />
      <View style={styles.info}>
        <Text style={styles.text} ellipsizeMode="head">
          {name}, {city}
        </Text>
        <TouchableOpacity>
          {/*{love ? (*/}
          {/*  <Icon size={22} color={'white'} name="favorite" />*/}
          {/*) : (*/}
          {/*  <Icon size={22} color={'white'} name="favorite-border" />*/}
          {/*)}*/}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: (width - 20) / 2 - 20,
    height: 250,
    padding: 10,
    marginVertical: 20,
    marginLeft: 20,
  },
  img: {
    borderRadius: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#96948ee3',
    padding: 12,
    marginTop: -62,
    marginLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    // fontFamily: themes.fonts.M,
    fontSize: 16,
    color: 'white',
  },
});

export default Card;
