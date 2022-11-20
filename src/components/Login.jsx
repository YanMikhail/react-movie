import React from 'react';
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {setUser} from "../store/userSlice";
import Form from "./Form";
import {useLocation, useNavigate} from "react-router-dom";
import { addAllFavourites} from "../store/favouriteSlice";
import {LSKey} from "../utils/keyLS";
import {addAllHistory} from "../store/historySlice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                dispatch(addAllFavourites(JSON.parse(localStorage.getItem(LSKey('fav'))) || []))
                dispatch(addAllHistory(JSON.parse(localStorage.getItem(LSKey('hist'))) || []))
                navigate(fromPage)
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            title='sign in'
            handleClick={handleLogin}
        />
    );
};

export default Login;