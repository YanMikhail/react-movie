import React from 'react';
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {setUser} from "../store/userSlice";
import Form from "./Form";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/history')
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