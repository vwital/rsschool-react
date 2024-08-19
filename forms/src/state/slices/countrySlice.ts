import { createSlice } from '@reduxjs/toolkit';
import allCountries from '../../utils/allCountries';

const countrySlice = createSlice({
    name: 'country',
    initialState: allCountries,
    reducers: {},
});

export default countrySlice.reducer;

export const selectCountries = (state: { country: string[] }) => state.country;
