import React, {useContext, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetMovieByIdQuery} from "../../store/movieApi";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../../store/favouriteSlice";
import s from './MoviePage.module.css'
import {useAuth} from "../../hooks/useAuth";
import {ThemeContext} from "../../store/themeContext";



const MoviePage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth} = useAuth()
    const {favourites} = useSelector(state => state.favourite)
    const [isFav, setIsFav] = useState(favourites.find(f => f.id === +id))
    const {dark} = useContext(ThemeContext)
    const {data: movie} = useGetMovieByIdQuery(id)
    const addToFavourite = (event) => {
        event.preventDefault()
        if(!isAuth) return navigate('/login')
        dispatch(addFavourite(movie))
        setIsFav(true)
    }
    const removeFromFavourite = (event) => {
        event.preventDefault()
        dispatch(removeFavourite(movie))
        setIsFav(false)
    }
    return (
        <>
            {movie &&
                <div className={`${s.card} ${!dark ? s.dark : s.blue}`}>
                    <img
                        className={s.poster}
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className={s.description}>
                        <h1 className={s.title}>{movie.title}</h1>
                        <p>Release date: {movie.release_date} Rating: {movie.vote_average}</p>
                        <p className={s.overview}>{movie.overview}</p>
                    </div>
                    {isFav
                        ? <button className={s.add + ' ' + s.delete} onClick={removeFromFavourite}>Remove from favorites</button>
                        : <button className={s.add} onClick={addToFavourite}>Add to favorites</button>
                    }
                </div>}
        </>
    );
};

export default MoviePage;