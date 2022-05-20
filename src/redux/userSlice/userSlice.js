import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  reLoginUSer,
} from 'redux/authOperations/authOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const pending = state => {
  state.isLoginning = true;
  state.isError = null;
};
const rejected = (state, action) => {
  state.isLoginning = false;
  state.isError = action.payload;
};

const userSlice = createSlice({
  name: 'userAuth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLogin: false,
    isLoginning: false,
    isError: null,
  },
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload.text;
    },
  },
  extraReducers: {
    // фетч register usera.
    [register.fulfilled]: (state, action) => {
      console.log('state,action in register dispatch', state, action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
      state.isLoginning = false;
      state.isError = false;
    },
    [register.pending]: state => {
      pending(state);
    },
    [register.rejected]: (state, action) => {
      rejected(state, action);
    },

    // fetch login user
    [login.fulfilled]: (state, action) => {
      console.log('state,action in login dispatch', state, action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
      state.isLoginning = false;
      state.isError = false;
    },
    [login.pending]: state => {
      pending(state);
    },
    [login.rejected]: (state, action) => {
      rejected(state, action);
    },
    // fetch logOut user
    [logout.fulfilled]: state => {
      console.log('state,action in logout dispatch', state);
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLogin = false;
      state.isLoginning = false;
      state.isError = false;
    },
    [logout.pending]: state => {
      pending(state);
    },
    [logout.rejected]: (state, action) => {
      rejected(state, action);
    },
    [reLoginUSer.fulfilled]: (state, action) => {
      console.log('state,action in reLoginUSer dispatch', state);
      state.user = action.payload;
      state.isLogin = true;
      state.isLoginning = false;
      state.isError = false;
    },
    [reLoginUSer.pending]: state => {
      pending(state);
    },
    [reLoginUSer.rejected]: (state, action) => {
      rejected(state, action);
    },
  },
});

// export const {}= userSlice.actions;
export const userSliceReducer = userSlice.reducer;

//LS
const userAuthPersistConfig = {
  key: 'userToken',
  storage,
  whitelist: ['token'],
};

export const persistedUserAuthReducer = persistReducer(
  userAuthPersistConfig,
  userSliceReducer
);

// Selectors
// export const getContacts = state => state.contacts.items;
// export const getFilterValue = state => state.contacts.filter;
// export const getLoading = state => state.contacts.isLoading;
// export const getError = state => state.contacts.error;
export const getName = state => state.userAuth.user.name;
export const getEmail = state => state.userAuth.user.email;
export const getIsLogin = state => state.userAuth.isLogin;
export const getIsLoggining = state => state.userAuth.isLoginning;
export const getState = state => state.userAuth;
