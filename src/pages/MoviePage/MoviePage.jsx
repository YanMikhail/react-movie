import React from 'react';
import {useParams} from "react-router-dom";
import {useGetMovieByIdQuery} from "../../store/movieApi";
import s from './MoviePage.module.css'


const MoviePage = () => {
    const {id} = useParams()
    const {data: movie, isLoading, isError} = useGetMovieByIdQuery(id)
    return (
        <>
            {movie &&
                <div className={s.card}>
                    <img
                        className={s.img}
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path
                        }`}
                        alt={movie.title}
                    />
                    <div className={s.description}>
                        <h1 className={s.title}>{movie.title}</h1>
                        <p>Release date: {movie.release_date} Rating: {movie.vote_average}</p>
                        <p className={s.overview}>{movie.overview}</p>
                        <button>Add to favorites</button>
                    </div>
                </div>}
        </>
    );
};

export default MoviePage;