import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import BrandLogo from '../../assets/images/react-movie-logo.svg';
import s from './Layout.module.css'
import {Container} from "@mui/material";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/userSlice";

const Layout = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()
    return (
        <>
        <header className={s.header}>
            <nav className={s.navbar}>
                <Link to='/'>
                    <img src={BrandLogo} alt="ReactMovie" style={{ width: 170 }}/>
                </Link>
                <ul className={s.links}>
                    {isAuth &&
                        <>
                            <li>
                                {email}
                            </li>
                            <button
                                onClick={() => dispatch(removeUser())}
                            >Log out from {email}</button>
                        </>
                    }
                    {!isAuth &&
                        <li>
                            <NavLink to='/login'>SignIn</NavLink>
                        </li>
                    }
                    {!isAuth &&
                        <li>
                            <NavLink to='/register'>SignUp</NavLink>
                        </li>
                    }
                    <li>
                        <NavLink to='/favourites'>Favourites</NavLink>
                    </li>
                    <li>
                        <NavLink to='/history'>History</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Container>
                <Outlet />
            </Container>
        </main>
        <footer className={s.footer}>
            <div className="footer__content container">
                © {new Date().getFullYear()} All rights reserved
            </div>
        </footer>
        </>
    );
};

export default Layout;