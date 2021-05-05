import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { eventsReducer } from './EventsReducer';
import { combineReducers } from 'redux';
import { authReducer } from './AuthReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  auth: authReducer,
});
const middleware = [];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const logger = (store) => (next) => (action) => {
  console.log(`dispatching ${action.type}`, action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware, logger, thunk),
);
const persistor = persistStore(store);

export { store, persistor };
