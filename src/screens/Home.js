import React from 'react';
import * as Location from 'expo-location';

import { Text, View } from 'react-native';

const Home = ({ route }) => {
  const { email, uid } = route.params;

  const [location, setLocation] = React.useState({ lat: null, long: null });
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        long: location.coords.longitude,
      });
      //setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.warn('state :', location);

  return (
    <View>
      <Text>{`User Id : ${uid}`}</Text>
      <Text>{`Email : ${email}`}</Text>
      <Text>{`Geolocation : ${text}`}</Text>
    </View>
  );
};

export default Home;
