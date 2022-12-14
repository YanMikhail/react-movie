import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../../store/favouriteSlice";
import heart from '../../assets/images/heart.png'
import redHeart from '../../assets/images/red-heart.png'
import FilmCard from "../ui/FilmCard/FilmCard";
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";




const MovieCards = ({movie}) => {
    const dispatch = useDispatch()
    const [isFav, setIsFav] = useState(false)
    const navigate = useNavigate()
    const {isAuth} = useAuth()
    const { favourites } = useSelector(state => state.favourite)

    useEffect(()=> {
        setIsFav(()=> !!favourites.find(f => f.id === movie.id))
    }, [favourites])

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
        <FilmCard
            movie={movie}
            likeHandler={isFav ? removeFromFavourite : addToFavourite}
            like={isFav ? redHeart : heart}
        />
    );
};

export default MovieCards;