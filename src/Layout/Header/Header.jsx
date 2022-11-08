import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {GiFilmProjector} from 'react-icons/gi'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to={'/'}>
                        <h1 className="header__logo">
                            <GiFilmProjector/>
                            I-R Cinema
                        </h1>
                    </Link>
                    <ul className="header__menu">
                        <li className="header__item">
                            <NavLink className="header__link header__link-films" to={'/films'}>
                               Фильмы
                            </NavLink>
                            <div className="header__item-down">
                                DOWN
                            </div>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" to={'/films'}>
                                Сериалы
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" to={'/films'}>
                                Мультфильмы
                            </Link>
                        </li>
                    </ul>
                    <div className="header__right">
                        <input className="header__search" type="search" placeholder='Поиск'/>
                        <div className="header__auth">
                            <Link to={'/login'}>Логин</Link>
                            /
                            <Link to={'/registration'}>Регистрация</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;