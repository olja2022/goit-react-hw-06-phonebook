import { combineReducers, configureStore } from '@reduxjs/toolkit';
import phoneSliceReducer from './phoneBookSlice';
import filterSliceReducer from './filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  storeContacts: phoneSliceReducer,
  storeFilter: filterSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['storeFilter'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const storeRedux = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(storeRedux);
export default storeRedux;
