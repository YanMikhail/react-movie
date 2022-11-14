import React from 'react';
import s from './MovieCard.module.css'
import {Link} from "react-router-dom";
import Like from "../ui/Like/Like";
import {useDispatch} from "react-redux";
import {addFavourite} from "../../store/favouriteSlice";
const MovieCard = ({movie}) => {
    return (
        <div className={s.card}>
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className={s.description}>
                    <p className={s.title}>{movie.title}</p>
                    <p className={s.release}>{movie.release_date}</p>
                </div>
            </Link>
            <Like className={s.favourite} id={movie.id}/>
        </div>
    );
};

export default MovieCard;