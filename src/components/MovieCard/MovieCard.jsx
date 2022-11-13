import React from 'react';
import s from './MovieCard.module.css'
const MovieCard = (props) => {
    return (
        <div className={s.card}>
            <img
                src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`}
                alt={props.movie.title}
            />
            <div className={s.description}>
                <p className={s.title}>{props.movie.title}</p>
                <p className={s.release}>{props.movie.release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;