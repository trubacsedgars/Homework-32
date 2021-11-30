// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type JokeInfoResponse = {
  joke: string
  id: number,
  category: string,
  error: boolean
};

type JokeCategoryResponse = {
  error: boolean
  jokes:[{
    category: string,
    joke: string,
    id: number,
    setup: string,
    delivery: string,
    }],
};

type AllCategoriesResponse = {
  error: boolean,
  categories:string[],
};

// Define a service using a base URL and expected endpoints
export const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<AllCategoriesResponse, undefined>({
      query: () => '/categories',
    }),
    getJokesByCategory: builder.query<JokeCategoryResponse, string>({
      query: (category) => `/joke/${category}?type=single&amount=10`,
    }),
    getJokesInfo: builder.query<JokeInfoResponse, string>({
      query: (id) => `/joke/Any?type=single&idRange=${id}`,
    }),
  }),
});

export const { reducer, reducerPath } = jokesApi;

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoriesQuery, useGetJokesByCategoryQuery, useGetJokesInfoQuery } = jokesApi;
