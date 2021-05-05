import React from 'react';
import * as Location from 'expo-location';

import { Text, View, StyleSheet } from 'react-native';
import EventCarousel from '../components/EventCarousel';
import EventList from '../components/EventList';
import { getUserGeoLocation, getSeakGeekEvents } from '../api/config';
import { store } from '../store/EventsReducer';
import { getEvents } from '../store/EventsReducer';
import { useDispatch, useSelector } from 'react-redux';

const Home = ({ navigation, route }) => {
  const { email, uid } = route.params;
  // const { state, getEventsSuccess } = store();
  const dispatch = useDispatch();
  const reduxEvents = useSelector((state) => state.events.events);
  const [location, setLocation] = React.useState({ lat: '', long: '' });
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [address, setAddress] = React.useState({});
  const [events, setEvents] = React.useState();
  console.log('~~~~~~~~~~~ REDUX EVENTS :', reduxEvents);
  React.useEffect(() => {
    (async () => {
      const address = await getUserGeoLocation();
      console.log('AAAAADDDDres :', address);
      //const events = await getSeakGeekEvents(address.city);
      dispatch(getEvents(address.city));
      //getEventsSuccess(events);
      // const events = await getSeakGeekEvents(address.city).then((res) => {
      //   console.log('EFFECT RES :', res);
      // });
      // console.log('EEEEEEVNTS :', events);
      setEvents(events);
      setAddress(address);
    })();
  }, []);

  // console.log('REDUX ::::::', state);

  return (
    <View style={styles.homeContainer}>
      <Text>{`User Id : ${uid}`}</Text>
      <Text>{`Email : ${email}`}</Text>
      <Text>{`City : ${address.city}`}</Text>
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
