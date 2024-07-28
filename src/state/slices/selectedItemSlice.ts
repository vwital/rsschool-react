import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedItemState } from "./interfaces";

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
