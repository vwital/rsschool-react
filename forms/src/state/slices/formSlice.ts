import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFormState {
    name: string | undefined;
    age: number;
    email: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
    gender: string | undefined;
    conditions: boolean | undefined;
    img: File | undefined | unknown;
    country: string | undefined;
}

const initialState: IFormState[] = [];

const formSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        addForm: (state, action: PayloadAction<IFormState>) => {
            state.push(action.payload);
        },
    },
});

export const { addForm } = formSlice.actions;
export default formSlice.reducer;

export const selectCountries = (state: { country: string[] }) => state.country;
