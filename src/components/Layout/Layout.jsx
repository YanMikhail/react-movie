import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import BrandLogo from '../../assets/images/react-movie-logo.svg';
import s from './Layout.module.scss'

const Layout = () => {
    return (
        <>
        <header className={s.header}>
            <nav className={s.navbar}>
                <Link to='/'>
                    <img src={BrandLogo} alt="ReactMovie" style={{ width: 170 }}/>
                </Link>
                <ul className={s.links}>
                    <li>
                        <NavLink to='/login'>SignIn</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register'>SignUp</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favourites'>Favourites</NavLink>
                    </li>
                    <li>
                        <NavLink to='/history'>History</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main className={s.container}>
            <Outlet />
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