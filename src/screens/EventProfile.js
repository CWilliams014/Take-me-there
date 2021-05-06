import React from 'react';

import { Text, View, Image, StyleSheet } from 'react-native';

const EventProfile = ({ route }) => {
  console.log('~~Event profile route :', route);
  const { title, image } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.backgroundImage} />
      <View style={styles.display}>
        <Text style={styles.text}>{`${title}`}</Text>
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
    resizeMode: 'cover', // or 'stretch' or 'contain'
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
    backgroundColor: '#96948ee3',
    fontWeight: 'bold',
    fontSize: 24,
    paddingHorizontal: 5,
  },
});

export default EventProfile;
