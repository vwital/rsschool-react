import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './slices/countrySlice';

const store = configureStore({
    reducer: {
        country: countrySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
