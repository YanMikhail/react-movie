import React from 'react';
import {useGetAllMoviesQuery, useGetMoviesByQueryQuery} from "../../store/movieApi";
import MovieCards from "../../components/MovieCards/MovieCards";
import s from './HomePage.module.css'
import { useState } from "react";
import { Link as NavLink } from "react-router-dom";
import {
    CircularProgress,
    Pagination,
    TextField,
} from "@mui/material";
import {useDebounce} from "../../hooks/useDebounce";



const HomePage = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const {isLoading, isError, data } = useGetAllMoviesQuery(page)
    const {data: searchData} = useGetMoviesByQueryQuery(debounced, {
        skip: debounced.length < 2
    })


    return (
        <>
            <div className={s.search}>
            <TextField
                fullWidth
                label="Search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            {searchData && <div className={s.dropdown}>
                <ul >
                    {searchData?.map(movie => (
                        <NavLink key={movie.id}  to={`/movie/${movie.id}`}>
                            <li className={s.movies}>{movie.title}</li>
                        </NavLink>
                    ))}
                </ul>
            </div>}
        </div>
            <div className={s.cards}>
                { isLoading && <CircularProgress sx={{mx: 'auto' }}/> }
                {data?.results.map(movie => (
                    <MovieCards movie={movie} key={movie.id}/>
                ))}
            </div>
            <div className={s.pagination}>
                <Pagination
                    showFirstButton
                    showLastButton
                    sx={{ marginY: 3, marginX: "auto" }}
                    count={50}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                />
            </div>
        </>
    );
};

export default HomePage;