// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const CentreNameApiSlice = createApi({
//   reducerPath: 'jsonServerApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
//   tagTypes: ['CentreName', 'CentreParams'],
//   endpoints: (builder) => ({
//     CentreName: builder.query({
//       query: () => `centre`,
//       providesTags: ['CentreName'],
//     }),
//   })
// });
  
// export const {
//   useCentreNameQuery,
// } = CentreNameApiSlice;

import {
  createSlice,
  createEntityAdapter,
  createSelector
} from '@reduxjs/toolkit'
import { ApiSlice } from './ApiSlice'

const apiWithTag = ApiSlice.enhanceEndpoints({addTagTypes: ['Centre']})

export const extendedApiSlice = apiWithTag.injectEndpoints({
  endpoints: builder => ({
    getCentre: builder.query({
      query: () => '/centre',
      providesTags: ['Centre'],
    })
  })
});

// Export the auto-generated hook for the `getCentre` query endpoint
export const { useGetCentreQuery } = extendedApiSlice;

export const selectCentreResult = extendedApiSlice.endpoints.getCentre.select(null);

const initialCentre = { Name: "anonymous centre" }
  
export const useCentreSelector = createSelector(
  selectCentreResult,
  centreResult => centreResult?.data ?? initialCentre
)
