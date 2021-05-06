import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

export const API_KEYS = {
  SEAT_GEEK_CLIENT_ID: 'MjE4NDYyOTV8MTYyMDE2NzIzNS43OTc1NTU3',
  SEAT_GEET_SECRET_ID:
    'c40c71e5682bbf11d24dfdc4ba0eda061efae65d8cb65c4307a9915e639c17fa',
};
const SEAT_GEEK_EVENTS_SLUG = 'https://api.seatgeek.com/2/events?venue.city=';

export const getUserGeoLocation = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});

    const address = await Location.reverseGeocodeAsync(location.coords);

    return address[0];
  } catch (err) {
    console.warn('getUserGeoLocation error :', err);
  }
};

export const getUserAddress = async (coords) => {
  return await Location.reverseGeocodeAsync(coords);
};

export const getSeakGeekEvents = async (city) => {
  const url = `${SEAT_GEEK_EVENTS_SLUG}${city}&client_id=${API_KEYS.SEAT_GEEK_CLIENT_ID}`;
  return await axios.get(url).then((res) => {
    return res.data.events;
  });
};
