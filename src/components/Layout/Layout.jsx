import React, {useContext, useEffect} from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {Button, Container, FormControlLabel, Switch} from "@mui/material";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../store/userSlice";
import {ThemeContext} from "../../store/themeContext";
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";
import BrandLogo from '../../assets/images/react-movie-logo.svg';
import s from './Layout.module.css'
import { clearAllFavourite} from "../../store/favouriteSlice";
import {clearHistory} from "../../store/historySlice";


const Layout = () => {
    const dispatch = useDispatch()
    const {favourites} = useSelector(state => state.favourite)
    const {history} = useSelector(state => state.history)
    const {isAuth, email} = useAuth()
    const {dark, toggleTheme} = useContext(ThemeContext)
    const logOut = () => {
        dispatch(removeUser())
    }

    useEffect(()=> {
        if(!isAuth && favourites?.length && history?.length){
            dispatch(clearAllFavourite())
            dispatch(clearHistory())
        }
    }, [isAuth])

    return (
        <>
        <header className={`${s.header} ${dark ? s.dark : s.blue}`}>
            <Container style={{height: 'inherit'}}>
                <nav className={s.navbar}>
                    <Link to='/'>
                        <img src={BrandLogo} alt="ReactMovie" style={{ width: 170 }}/>
                    </Link>
                    <ul className={s.links}>
                        {isAuth &&
                            <>
                                <li>
                                    Hi, {email}!
                                </li>
                            </>
                        }
                        {!isAuth &&
                            <>
                                <li>
                                    <NavLink to='/login'>SignIn</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/register'>SignUp</NavLink>
                                </li>
                            </>

                        }
                        <li>
                            <NavLink to='/favourites'>Favourites</NavLink>
                        </li>
                        <li>
                            <NavLink to='/history'>History</NavLink>
                        </li>
                    </ul>
                    {isAuth &&
                        <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={logOut}
                        >Log out
                        </Button>
                    }
                    <FormControlLabel
                        value="Dark Mode"
                        control={<Switch color="primary" onClick={toggleTheme}/>}
                        label="Dark Mode"
                        labelPlacement="start"
                        style={{color: 'white'}}
                    />
                </nav>
            </Container>
        </header>
        <ErrorBoundary>
            <main >
                <Container>
                    <Outlet />
                </Container>
            </main>
        </ErrorBoundary>
        <footer className={`${s.footer} ${dark ? s.dark : s.blue}`}>
            <div className="footer__content container">
                © {new Date().getFullYear()} All rights reserved
            </div>
        </footer>
        </>
    );
};

export default Layout;