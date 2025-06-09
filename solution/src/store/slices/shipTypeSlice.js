import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// WARNING you have to import from "@reduxjs/toolkit/query/react NOT from @reduxjs/toolkit/query/

const shipTypeSlice = createApi({
  reducerPath: "shipType",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      addShipType: builder.mutation({
        invalidatesTags: ["RentalCategory"],
        query: (shipTypeName) => {
          return {
            url: "/shipTypes",
            method: "POST",
            body: {
              name: shipTypeName,
            },
          };
        },
      }),
      fetchShipTypes: builder.query({
        providesTags: ["RentalCategory"],
        query: () => {
          return {
            url: "/shipTypes",
            method: "GET",
          };
        },
      }),
      deleteShipType: builder.mutation({
        invalidatesTags: ["RentalCategory"],
        query: (shipType) => {
          return {
            url: "/shipTypes/" + shipType.id,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchShipTypesQuery,
  useAddShipTypeMutation,
  useDeleteShipTypeMutation,
} = shipTypeSlice;
export { shipTypeSlice };
