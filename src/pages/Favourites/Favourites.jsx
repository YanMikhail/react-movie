import React from 'react';
import {useSelector} from "react-redux";
import FavouriteCards from "../../components/FavouriteCards/FavouriteCards";
import s from './Favourites.module.css'

const Favourites = () => {
    const {favourites} = useSelector(state => state.favourite)

    if(favourites.length === 0) return <h2 style={{textAlign: 'center'}}>Favorites list is still empty</h2>

    return (
            <ul className={s.cards}>
                { favourites.map(movie => (
                    <FavouriteCards key={movie.id} movie={movie}/>
                )) }
            </ul>
    );
};

export default Favourites;