import React from 'react';
import {CircularProgress} from "@mui/material";
import {useParams} from "react-router-dom";
import {useGetMoviesByQueryQuery} from "../../store/movieApi";
import MovieCards from "../../components/MovieCards/MovieCards";
import s from './SearchPage.module.css'

const SearchPage = () => {
    const {query} = useParams()
    const {data, isLoading} = useGetMoviesByQueryQuery(query)
    return (
            <div className={s.cards}>
                { isLoading && <CircularProgress sx={{mx: 'auto' }}/> }
                {data && data.map(movie => (
                    <MovieCards key={movie.id} movie={movie}/>
                ))}
            </div>
    );
};

export default SearchPage;