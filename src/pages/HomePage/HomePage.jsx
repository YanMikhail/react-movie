import React from 'react';
import {useGetAllMoviesQuery, useGetMoviesByQueryQuery} from "../../store/movieApi";
import MovieCards from "../../components/MovieCards/MovieCards";
import s from './HomePage.module.css'
import { useState } from "react";
import { Link as NavLink } from "react-router-dom";
import {
    CircularProgress,
    Pagination,
} from "@mui/material";
import {useDebounce} from "../../hooks/useDebounce";
import Search from "../../components/Search/Search";
import {useDispatch} from "react-redux";
import {addHistory} from "../../store/historySlice";



const HomePage = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const dispatch = useDispatch()
    const {isLoading, data } = useGetAllMoviesQuery(page)
    const {data: searchData} = useGetMoviesByQueryQuery(debounced, {
        skip: debounced.length < 2
    })
    const handleAddToHistory = () => {
        dispatch(addHistory(search))
    }

    return (
        <>
            <div className={s.search}>
                <Search search={search} setSearch={setSearch} handleAddToHistory={handleAddToHistory}/>
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