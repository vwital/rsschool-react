import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import itemsReducer from "./slices/itemsSlice";
import selectedItemReducer from "./slices/selectedItemSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    selectedItem: selectedItemReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
