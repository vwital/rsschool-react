import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedItemState {
  selectedItem: boolean | null;
}

const initialState: SelectedItemState = {
  selectedItem: null,
};

const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<boolean>) => {
      state.selectedItem = action.payload;
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
  },
});

export const { selectItem, clearSelectedItem } = selectedItemSlice.actions;
export default selectedItemSlice.reducer;
