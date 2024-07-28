import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResult } from "../../components/ResultsList/interfaces";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getItems: builder.query<{ results: IResult[] }, string>({
      query: (endpoint) => endpoint,
    }),
  }),
});

export const { useGetItemsQuery } = api;
