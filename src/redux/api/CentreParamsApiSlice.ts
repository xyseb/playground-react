// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export interface ICentre
// {
//     Nom?: string;
//     Params?: {};
// };


// const initialState: ICentre = {
//   Nom: undefined,
//   Params: undefined
// }


// export const CentreParamsApiSlice = createApi({
//   reducerPath: 'jsonServerApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
//   tagTypes: ['CentreName', 'CentreParams'],
//   endpoints: (builder) => ({
//     // getCentreName: builder.query({
//     //   query: () => `centre`,
//     //   providesTags: ['CentreName'],
//     // }),

//     getCentreParams: builder.query({
//       query: (page = 1) => `params`,
//       providesTags: ['CentreParams'],
//     }),


//     createCentreParam: builder.mutation({
//         query: (CentreParam) => ({
//           url: 'params',
//           method: 'POST',
//           body: { CentreParam },
//         }),
//         invalidatesTags: ['CentreParams'],
//       }),
  
//       updateCentreParam: builder.mutation({
//         query: ({ id, CentreParam }) => ({
//           url: `params/${id}`,
//           method: 'PUT',
//           body: { CentreParam },
//         }),
//         invalidatesTags: ['CentreParams'],
//       }),
  
//       deleteCentreParam: builder.mutation({
//         query: (id) => ({
//           url: `params/${id}`,
//           method: 'DELETE',
//         }),
//         invalidatesTags: ['CentreParams'],
//       }),
//     }),
//   });
  
// export const {
//   // useGetCentreNameQuery,
//   useGetCentreParamsQuery,
//   useCreateCentreParamMutation,
//   useUpdateCentreParamMutation,
//   useDeleteCentreParamMutation,
// } = CentreParamsApiSlice;

import { ApiSlice } from './ApiSlice'

const apiWithTag = ApiSlice.enhanceEndpoints({addTagTypes: ['CentreParams']})

export const extendedApiSlice = apiWithTag.injectEndpoints({
  endpoints: builder => ({
    getCentreParams: builder.query({
      query: (page = 1) => `params`,
      providesTags: ['CentreParams'],
    }),


    createCentreParam: builder.mutation({
        query: (CentreParam) => ({
          url: 'params',
          method: 'POST',
          body: { CentreParam },
        }),
        invalidatesTags: ['CentreParams'],
      }),
  
      updateCentreParam: builder.mutation({
        query: ({ id, CentreParam }) => ({
          url: `params/${id}`,
          method: 'PUT',
          body: { CentreParam },
        }),
        invalidatesTags: ['CentreParams'],
      }),
  
      deleteCentreParam: builder.mutation({
        query: (id) => ({
          url: `params/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['CentreParams'],
      }),
    }),
});

export const {
  useGetCentreParamsQuery,
  useCreateCentreParamMutation,
  useUpdateCentreParamMutation,
  useDeleteCentreParamMutation,
} = extendedApiSlice;

export const selectCentreParamsResult = extendedApiSlice.endpoints.getCentreParams.select(null);