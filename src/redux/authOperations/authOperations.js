import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { fetchContactsThunk } from 'redux/contactsOperations/contactsOperations';

// const BASE_AUTH_URL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

// fetch ('path',{method:'POST',header:{Authorization:'Bearer ${token}',}})

export const register = createAsyncThunk(
  'userAuth/register',
  async (userParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`/users/signup`, userParams);
      // dispatch(addContact(contact));
      // dispatch(fetchContactsThunk());

      // console.log(user);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'userAuth/login',
  async (userParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`/users/login`, userParams);
      // dispatch(addContact(contact));
      // dispatch(fetchContactsThunk());

      console.log(response);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'userAuth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`/users/logout`);
      // dispatch(addContact(contact));
      // dispatch(fetchContactsThunk());
      token.unSet();
      console.log(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const reLoginUSer = createAsyncThunk(
  'userAuth/reLoginUSer',
  async (_, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const lsToken = state.userAuth.token;
    if (!lsToken) {
      console.log('tokena net');
      return rejectWithValue();
    }
    token.set(lsToken);
    try {
      const response = await axios.get('/users/current');
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// fetchContactsThunk.pending - eto loading
// fetchContactsThunk.fulfilled - eto success
// fetchContactsThunk.rejected - eto error

//  otmena -
// useEffect()=> {
//    const promise = dispatch(nashdispatch);
//     return () => {
//         promise.abort()
//     }
// }
