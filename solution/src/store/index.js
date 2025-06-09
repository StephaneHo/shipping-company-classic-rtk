import { configureStore } from "@reduxjs/toolkit";

import { rentalSubCategoriesApi } from "./slices/shipSubTypeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rentalCategoriesApi } from "./slices/shipTypeSlice";

export const store = configureStore({
  reducer: {
    [rentalCategoriesApi.reducerPath]: rentalCategoriesApi.reducer,
    [rentalSubCategoriesApi.reducerPath]: rentalSubCategoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(rentalCategoriesApi.middleware)
      .concat(rentalSubCategoriesApi.middleware);
  },
});

setupListeners(store.dispatch);

window.store = store;

export {
  useFetchRentalSubCategoriesQuery,
  useAddRentalSubCategoryMutation,
  useDeleteRentalSubCategoryMutation,
} from "./slices/shipSubTypeSlice";
export {
  useFetchRentalCategoriesQuery,
  useAddRentalCategoryMutation,
  useDeleteRentalCategoryMutation,
} from "./slices/shipTypeSlice";
