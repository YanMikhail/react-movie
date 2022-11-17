import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../../components/SignUp";
import s from './Register.module.css'

const RegisterPage = () => {
    return (
        <div>
            <h1 className={s.title}>Зарегистрироваться</h1>
            <SignUp/>
            <p className={s.alternative}>
                Already have an account? <Link to='/login' className={s.link}>Sign In</Link>
            </p>
        </div>
    );
};

export default RegisterPage;