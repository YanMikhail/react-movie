import React from 'react';
import {useSelector} from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import s from './Favourites.module.css'

const Favourites = () => {
    const {favourites} = useSelector(state => state.favourite)

    if(favourites.length === 0) return <p>No items.</p>
    return (
            <ul className={s.cards}>
                { favourites.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                )) }
            </ul>
    );
};

export default Favourites;