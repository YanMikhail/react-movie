import React, {useState} from 'react';
import s from './MovieCard.module.css'
import {Link} from "react-router-dom";
import Like from "../ui/Like/Like";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../../store/favouriteSlice";
import heart from '../../assets/images/heart.png'
import redHeart from '../../assets/images/red-heart.png'


const MovieCard = ({movie}) => {
    const dispatch = useDispatch()
    const {favourites} = useSelector(state => state.favourite)
    const [isFav, setIsFav] = useState(favourites.includes(movie))
    const addToFavourite = (event) => {
        event.preventDefault()
        dispatch(addFavourite(movie))
        setIsFav(true)
    }
    const removeFromFavourite = (event) => {
        event.preventDefault()
        dispatch(removeFavourite(movie))
        setIsFav(false)
    }
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
            {!isFav
                ? <Like className={s.favourite} clickHandler={addToFavourite} img={heart}/>
                : <Like className={s.favourite} clickHandler={removeFromFavourite} img={redHeart}/>
            }
        </div>
    );
};

export default MovieCard;