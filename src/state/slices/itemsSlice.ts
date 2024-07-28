// itemsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResult } from "@components/ResultsList/interfaces";
import { ItemState } from "./interfaces";

const initialState: ItemState = {
  items: [],
  selectedItems: [],
  loading: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IResult[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    selectItem: (state, action: PayloadAction<IResult>) => {
      state.selectedItems.push(action.payload);
    },
    unselectItem: (state, action: PayloadAction<string>) => {
      state.selectedItems = state.selectedItems.filter(
        (item: IResult) => item.name !== action.payload,
      );
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
  },
});

export const {
  setItems,
  setLoading,
  selectItem,
  unselectItem,
  clearSelectedItems,
} = itemsSlice.actions;
export default itemsSlice.reducer;
