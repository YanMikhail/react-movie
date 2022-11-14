import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/'
    }),
    endpoints: build => ({
        getAllMovies: build.query({
            query: (page) => ({
            url: `movie/now_playing?`,
            method: 'GET',
            params: {
                api_key: '483698be2836c105d00456d472854450',
                page
            },
            contentType: "application/json",
        }),
        }),
        getMoviesByQuery: build.query({
            query: (query) => ({
                url: 'search/movie?',
                method: 'GET',
                params: {
                    api_key: '483698be2836c105d00456d472854450',
                    query,
                },
                contentType: "application/json",
            }),
            transformResponse(response) {
                return response.results
            }
        }),
        getMovieById: build.query({
            query: (id) => ({
                url: `movie/${id}?`,
                method: 'GET',
                params: {
                    api_key: '483698be2836c105d00456d472854450',
                },
                contentType: "application/json",
            })
        })
    })

})

export const {useGetAllMoviesQuery, useGetMoviesByQueryQuery, useGetMovieByIdQuery} = movieApi