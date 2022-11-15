import React from 'react';
import {removeFavourite} from "../../store/favouriteSlice";
import {useDispatch} from "react-redux";
import FilmCard from "../ui/FilmCard/FilmCard";
import redHeart from "../../assets/images/red-heart.png";


const FavouriteCards = ({movie}) => {
    const dispatch = useDispatch()
    const removeFromFavourite = (event) => {
        event.preventDefault()
        dispatch(removeFavourite(movie))
    }
    return (
        <FilmCard movie={movie} likeHandler={removeFromFavourite} like={redHeart}/>
    );
};

export default FavouriteCards;