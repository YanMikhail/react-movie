import React from 'react';
import propTypes from 'prop-types'
import {Link} from "react-router-dom";
import poster from '../../../assets/images/poster.jpg'
import s from './FilmCard.module.css'


const FilmCard = ({movie, likeHandler, like}) => {
    return (
        <div className={s.card}>
            <Link to={`/movie/${movie.id}`}>
                {movie.poster_path
                    ? <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}/>
                    : <img src={poster} alt="Poster doesn't exist" />
                }
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