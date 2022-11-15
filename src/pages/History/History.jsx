import React from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/userSlice";

const History = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()
    return isAuth
        ? (
            <>
                <h1>History</h1>
                <button
                    onClick={() => dispatch(removeUser())}
                >Log out from {email}</button>
            </>
        )
        : (
            <Navigate to='/login'/>
        )
};

export default History;