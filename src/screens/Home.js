import React from 'react';
import * as Location from 'expo-location';

import { Text, View, StyleSheet } from 'react-native';
import EventCarousel from '../components/EventCarousel';
import EventList from '../components/EventList';
const Home = ({ navigation, route }) => {
  const { email, uid } = route.params;

  const [location, setLocation] = React.useState({ lat: null, long: null });
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [address, setAddress] = React.useState();
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let foundAddress = await Location.reverseGeocodeAsync(location.coords);
      console.warn('foundAddress :', foundAddress);

      setLocation({
        lat: location.coords.latitude,
        long: location.coords.longitude,
      });
      setAddress({
        ...foundAddress[0],
      });
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.warn('state address :', address);

  return (
    <View style={styles.homeContainer}>
      <Text>{`User Id : ${uid}`}</Text>
      <Text>{`Email : ${email}`}</Text>
      <Text>{`Geolocation : ${text}`}</Text>
      <EventList navigation={navigation} />
      {/*<EventCarousel navigate={navigation.navigate} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});

export default Home;
