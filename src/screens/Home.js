import React from 'react';

import { Text, View } from 'react-native';

const Home = ({ route }) => {
  const { email, uid } = route.params;

  return (
    <View>
      <Text>{`User Id : ${uid}`}</Text>
      <Text>{`Email : ${email}`}</Text>
    </View>
  );
};

export default Home;
