import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import s from "./History.module.css"

const History = () => {
    const {history} = useSelector(state => state.history)
    if(history.length === '0') return <h2 style={{textAlign: 'center'}}>Search history is still empty</h2>
    return (
        <div>
            <h1 className={s.header}>You previously searched:</h1>
            {history.map((item, index) => (
                <div key={index} className={s.item}>
                    <span className={s.request}>"{item}"</span> Go to previous search <Link to={`/search/${item}`} className={s.link}>`search/${item}`</Link>
                </div>
            ))}
        </div>
    )
};

export default History;