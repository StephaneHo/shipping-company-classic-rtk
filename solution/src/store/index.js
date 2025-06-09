import { configureStore } from "@reduxjs/toolkit";

import { shipSubTypeSlice } from "./slices/shipSubTypeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shipTypeSlice } from "./slices/shipTypeSlice";

export const store = configureStore({
  reducer: {
    [shipTypeSlice.reducerPath]: shipTypeSlice.reducer,
    [shipSubTypeSlice.reducerPath]: shipSubTypeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(shipTypeSlice.middleware)
      .concat(shipSubTypeSlice.middleware);
  },
});

setupListeners(store.dispatch);

window.store = store;

export {
  useAddShipSubTypeMutation,
  useDeleteShipSubTypeMutation,
  useFetchShipSubTypesQuery,
} from "./slices/shipSubTypeSlice";
export {
  useAddShipTypeMutation,
  useFetchShipTypesQuery,
  useDeleteShipTypeMutation,
} from "./slices/shipTypeSlice";
