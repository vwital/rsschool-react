import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slices/countrySlice';
import formReducer from './slices/formSlice';

const store = configureStore({
    reducer: {
        country: countryReducer,
        form: formReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
