import React from 'react';
import {useGetAllMoviesQuery} from "../../store/movieApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import s from './HomePage.module.css'
import { useState, useEffect } from "react";
import { Link as NavLink } from "react-router-dom";
import {
    Container,
    Pagination,
    PaginationItem,
    TextField,
    Stack,
    Link
} from "@mui/material";

const HomePage = (props) => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const {isLoading, isError, data } = useGetAllMoviesQuery(page)
    console.log(props)
    return (
        <Container sx={{marginTop: 5}} >
            <TextField
                fullWidth
                label="Search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
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
            <div>
                { isLoading && <p className="text-center">Loading...</p> }
            </div>
            <div className={s.cards}>
                {data && data.results.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </Container>
    );
};

export default HomePage;