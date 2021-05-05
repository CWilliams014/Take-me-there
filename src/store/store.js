import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { eventsReducer } from './EventsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ events: eventsReducer });
const middleware = [];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware, thunk),
);
const persistor = persistStore(store);

export { store, persistor };
