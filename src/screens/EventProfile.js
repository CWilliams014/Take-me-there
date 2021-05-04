import React from 'react';

import { Text, View, Image, StyleSheet } from 'react-native';

const EventProfile = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/liveRandom.jpeg')}
        style={styles.backgroundImage}
      />
      <View style={styles.display}>
        <Text
          style={styles.text}
        >{`I am Event Profile for event: ${route.params.concertName}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  display: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: 'white',
  },
});

export default EventProfile;
