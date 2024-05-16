import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { campersReducer } from './slice';

const persistConfig = {
  key: 'favorites_ids',
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, campersReducer);

export const reducer = {
  campers: persistedReducer,
};
