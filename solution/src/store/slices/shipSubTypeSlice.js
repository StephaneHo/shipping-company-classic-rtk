import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// WARNING you have to import from "@reduxjs/toolkit/query/react NOT from @reduxjs/toolkit/query/

const shipSubTypeSlice = createApi({
  reducerPath: "shipSubType",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      addShipSubType: builder.mutation({
        invalidatesTags: (
          result,
          error,
          { rentalCategoryId, rentalSubCategoryName }
        ) => {
          return [{ type: "RentalSubCategory", id: rentalCategoryId }];
        },
        query: ({ shipTypeId, shipSubTypeName }) => {
          return {
            url: "/shipSubTypes",
            method: "POST",
            body: {
              shipTypeId: shipTypeId,
              name: shipSubTypeName,
            },
          };
        },
      }),
      fetchShipSubTypes: builder.query({
        providesTags: (result, error, category) => {
          return [{ type: "RentalSubCategory", id: category.id }];
        },
        query: (shipType) => {
          return {
            url: "/shipSubTypes",
            params: {
              shipTypeId: shipType.id,
            },
            method: "GET",
          };
        },
      }),
      deleteShipSubType: builder.mutation({
        invalidatesTags: (
          result,
          error,
          { shipTypeId, rentalSubCategoryName }
        ) => {
          return [{ type: "RentalSubCategory", id: shipTypeId }];
        },
        query: (shipSubType) => {
          return {
            url: "/shipSubType/" + shipSubType.id,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchShipSubTypesQuery,
  useAddShipSubTypeMutation,
  useDeleteShipSubTypeMutation,
} = shipSubTypeSlice;
export { shipSubTypeSlice };
