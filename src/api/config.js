import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

export const API_KEYS = {
  SEAT_GEEK_CLIENT_ID: 'MjE4NDYyOTV8MTYyMDE2NzIzNS43OTc1NTU3',
  SEAT_GEET_SECRET_ID:
    'c40c71e5682bbf11d24dfdc4ba0eda061efae65d8cb65c4307a9915e639c17fa',
  GOOGLE_MAPS_ID: 'AIzaSyDqaBaar6cAg-nUTmMr0jUpEdRmfyyJh0Y',
};
const SEAT_GEEK_EVENTS_SLUG = 'https://api.seatgeek.com/2/events?venue.city=';
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
// const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;
const TRAVEL_TIMES_SLUG =
  'https://maps.googleapis.com/maps/api/directions/json?';
export const getUserGeoLocation = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log('COORDS :', location.coords);
    const address = await Location.reverseGeocodeAsync(location.coords);

    return {
      address: address[0],
      location: {
        lat: location.coords.latitude,
        long: location.coords.longitude,
      },
    };
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
