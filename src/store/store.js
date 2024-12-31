import { configureStore } from "@reduxjs/toolkit";
import autheReducer from './authSlice';
const store = configureStore({
    reducer: {
      auth: autheReducer,
    }
});


export default store;