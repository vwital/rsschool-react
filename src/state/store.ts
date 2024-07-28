import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./slices/itemsSlice";
import selectedItemReducer from "./slices/selectedItemSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    selectedItem: selectedItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
