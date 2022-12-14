import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from "./Form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../store/userSlice";


const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <Form
            title='register'
            handleClick={handleRegister}
        />
    );
};

export default SignUp;