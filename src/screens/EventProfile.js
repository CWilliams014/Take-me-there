import React from 'react';

import { Text, View } from 'react-native';

const EventProfile = ({ route }) => {
  console.log('Event Profile props:', route);
  return (
    <View>
      <Text>{`I am Event Profile for event: ${route.params.concertName}`}</Text>
    </View>
  );
};

export default EventProfile;
