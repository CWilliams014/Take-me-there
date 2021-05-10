import React from 'react';
import { API_KEYS, getSeakGeekEvents } from '../api/config';
import axios from 'axios';
const TRAVEL_TIMES_SLUG =
  'https://maps.googleapis.com/maps/api/directions/json?';
export const initialState = {
  status: '',
  events: [],
  error: '',
};

const GET_EVENTS_BEGIN = 'GET_EVENTS_BEGIN';
const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

// export function eventsStore(initialState = initialState) {
//   const [state, dispatch] = React.useReducer(eventsReducer, initialState);
//   const getEventsBegin = () => dispatch({ type: GET_EVENTS_BEGIN });
//   const getEventsSuccess = (events) =>
//     dispatch({ type: GET_EVENTS_SUCCESS, payload: events });
//   const getEventsFailure = () => dispatch({ type: GET_EVENTS_FAILURE });
//   return {
//     state,
//     getEventsBegin,
//     getEventsSuccess,
//     getEventsFailure,
//   };
// }

export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_BEGIN:
      return { ...state, status: 'pending' };
    case GET_EVENTS_SUCCESS:
      return { ...state, status: 'resolved', events: action.payload };
    case GET_EVENTS_FAILURE:
      return { ...state, status: 'rejected', error: action.payload };
    default:
      return state;
  }
}

export const getEvents = (city) => async (dispatch) => {
  dispatch({ type: GET_EVENTS_BEGIN });
  try {
    const events = await getSeakGeekEvents(city);
    dispatch({ type: GET_EVENTS_SUCCESS, payload: events });
  } catch (err) {
    dispatch({ type: GET_EVENTS_FAILURE, payload: err });
  }
};

/**
 *
 * @param origin - lat / long coordinates of user
 * @param destinations {Array} - List of lat / long coordinates and identifier for events
 * @returns
 */
export const getTravelTime = (lat, lon, destinations) => async (dispatch) => {
  try {
    const origin = `${lat},${lon}`;

    const timePromises = destinations.map(async (dest) => {
      let eventWithTravelTimes = {};
      const destination = `${dest.venue.location.lat},${dest.venue.location.lon}`;
      const url = `${TRAVEL_TIMES_SLUG}origin=${origin}&destination=${destination}&key=${API_KEYS.GOOGLE_MAPS_ID}`;
      return await axios.get(url).then((res) => {
        eventWithTravelTimes = {
          drivingTime: res.data.routes[0].legs[0].duration.text,
          ...dest,
        };
        return eventWithTravelTimes;
      });
    });
    Promise.all(timePromises).then((tRes) => {
      dispatch({ type: GET_EVENTS_SUCCESS, payload: tRes });
    });
  } catch (err) {
    console.warn('Travel Time Error :', err);
  }
};
