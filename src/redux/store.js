import { configureStore } from '@reduxjs/toolkit';
import { contactsSliceReducer } from './contactsSlice/contactsSlice';
// import { userSliceReducer} from './userSlice/userSlice';

import { persistedUserAuthReducer } from './userSlice/userSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// store
export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    // userAuth: userSliceReducer,
    userAuth: persistedUserAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
