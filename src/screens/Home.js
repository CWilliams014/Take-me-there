import React from 'react';
import * as Location from 'expo-location';

import { Text, View, StyleSheet } from 'react-native';
import EventCarousel from '../components/EventCarousel';
import EventList from '../components/EventList';
import { getUserGeoLocation, getSeakGeekEvents } from '../api/config';
import { store } from '../store/EventsReducer';
import { getEvents } from '../store/EventsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getTravelTime } from '../store/EventsReducer';

const Home = ({ navigation, route }) => {
  // const { email, uid } = route.params;
  const dispatch = useDispatch();
  const reduxEvents = useSelector((state) => state.events.events);

  const [coords, setCoords] = React.useState({ lat: '', lon: '' });
  const [address, setAddress] = React.useState({});
  const [events, setEvents] = React.useState();
  // console.log('~~~~~~~~~~~ REDUX EVENTS :', reduxEvents);
  React.useEffect(() => {
    (async () => {
      const { address, location } = await getUserGeoLocation();
      const { lat, lon: long } = location;
      const lon = location.long;
      dispatch(getTravelTime(lat, lon, reduxEvents));

      setCoords({
        lat,
        lon,
      });
      dispatch(getEvents(address.city));
      setEvents(events);
      setAddress(address);
    })();
  }, []);

  return (
    <View style={styles.homeContainer}>
      {/*<Text>{`User Id : ${uid}`}</Text>*/}
      {/*<Text>{`Email : ${email}`}</Text>*/}
      <Text>{`City : ${address.city}`}</Text>
      <EventList navigation={navigation} events={reduxEvents} />
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
