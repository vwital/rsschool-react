import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormState } from '../../utils/interfaces';

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

export const selectForms = (state: { form: IFormState[] }) => state.form;
