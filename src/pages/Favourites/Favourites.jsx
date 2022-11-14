import React from 'react';
import {useSelector} from "react-redux";
import {favourite} from "../../store/favouriteSlice";

const Favourites = () => {
    // const {favourites} = useSelector(state => state.favourite)
    // if(favourites.length === 0) return <p>No items.</p>
    return (
        <div>
            <ul>
                {/*{ favourites.map(f => (*/}
                {/*    <li key={f}>*/}
                {/*        <a href={f} target="_blank">{f}</a>*/}
                {/*    </li>*/}
                {/*)) }*/}
            </ul>
        </div>
    );
};

export default Favourites;