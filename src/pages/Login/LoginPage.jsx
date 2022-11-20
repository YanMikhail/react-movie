import React from 'react';
import {Link} from "react-router-dom";
import Login from "../../components/Login";
import s from "../Register/Register.module.css";

const LoginPage = () => {

    return (
        <div>
            <h1 className={s.title}>Войти в профиль</h1>
            <Login/>
            <p className={s.alternative}>
                Don't have an account? <Link to='/register' className={s.link}>Sign Up</Link>
            </p>
        </div>
    );
};

export default LoginPage;