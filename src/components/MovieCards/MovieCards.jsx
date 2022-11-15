import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../../store/favouriteSlice";
import heart from '../../assets/images/heart.png'
import redHeart from '../../assets/images/red-heart.png'
import FilmCard from "../ui/FilmCard/FilmCard";


const MovieCards = ({movie}) => {
    const dispatch = useDispatch()
    const {favourites} = useSelector(state => state.favourite)
    const [isFav, setIsFav] = useState(favourites.find(f => f.id === movie.id))

    const addToFavourite = (event) => {
        event.preventDefault()
        dispatch(addFavourite(movie))
        console.log(isFav)
        setIsFav(true)
    }
    const removeFromFavourite = (event) => {
        event.preventDefault()
        dispatch(removeFavourite(movie))
        console.log(isFav)
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