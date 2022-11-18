import React, {useContext} from 'react';
import propTypes from 'prop-types'
import s from './FilmCard.module.css'
import {Link} from "react-router-dom";
import {ThemeContext} from "../../../store/themeContext";



const FilmCard = ({movie, likeHandler, like}) => {
    const {dark} = useContext(ThemeContext)
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
            <button className={s.like} onClick={likeHandler}>
                <img
                    className={s.img}
                    src={like}
                    alt="Like"
                />
            </button>
        </div>
    );
};

FilmCard.propTypes = {
    movie: propTypes.object,
    likeHandler: propTypes.func,
    like: propTypes.string
}

export default FilmCard;