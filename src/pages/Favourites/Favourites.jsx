import React from 'react';
import {useSelector} from "react-redux";
import FavouriteCards from "../../components/FavouriteCards/FavouriteCards";
import s from './Favourites.module.css'

const Favourites = () => {
    const {favourites} = useSelector(state => state.favourite)

    if(favourites.length === 0) return <p>No items.</p>
    return (
            <ul className={s.cards}>
                { favourites.map(movie => (
                    <FavouriteCards key={movie.id} movie={movie}/>
                )) }
            </ul>
    );
};

export default Favourites;