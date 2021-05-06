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
  const { name, love, city, uri, title, venue, performers } = item;
  const image = performers[0].images.huge;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={(e, name, uri) => handleClickPhoto(e, name, uri)}
      >
        <ImageBackground
          style={styles.image}
          imageStyle={styles.img}
          source={{ uri: image }}
        />
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
    //paddingBottom: 5,
    marginTop: -92,
    marginLeft: 15,
    //marginBottom: 0,
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
