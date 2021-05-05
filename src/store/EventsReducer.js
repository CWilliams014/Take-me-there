import React from 'react';
import { getSeakGeekEvents } from '../api/config';
export const initialState = {
  status: '',
  events: [],
  error: '',
};

const GET_EVENTS_BEGIN = 'GET_EVENTS_BEGIN';
const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

export function eventsStore(initialState = initialState) {
  const [state, dispatch] = React.useReducer(eventsReducer, initialState);
  const getEventsBegin = () => dispatch({ type: GET_EVENTS_BEGIN });
  const getEventsSuccess = (events) =>
    dispatch({ type: GET_EVENTS_SUCCESS, payload: events });
  const getEventsFailure = () => dispatch({ type: GET_EVENTS_FAILURE });
  return {
    state,
    getEventsBegin,
    getEventsSuccess,
    getEventsFailure,
  };
}

export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_BEGIN:
      return { ...state, status: 'pending' };
    case GET_EVENTS_SUCCESS:
      return { ...state, status: 'resolved', events: action.payload };
    case GET_EVENTS_FAILURE:
      return { ...state, status: 'rejected' };
    default:
      return state;
  }
}

export const getEvents = (city) => async (dispatch) => {
  console.log('get events called city :', city);
  dispatch({ type: GET_EVENTS_BEGIN });
  try {
    const events = await getSeakGeekEvents(city);
    dispatch({ type: GET_EVENTS_SUCCESS, payload: events });
  } catch (err) {
    console.log('~~~ ERROR EVENT FETCH', err);
  }
};
