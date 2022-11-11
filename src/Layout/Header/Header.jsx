import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import {BsFillCameraReelsFill} from 'react-icons/bs'
import {useDispatch, useSelector} from "react-redux";
import {getCinema} from "../../redux/reducers/cinema";
import {search} from "../../redux/reducers/cinema";

const Header = () => {
    const dispatch = useDispatch()
    const {filter} = useSelector((store) => store.cinema)

   const handleSearch = (e) => {

       dispatch(search(e.target.value))
   }

    useEffect(() => {
        dispatch(getCinema(filter))
    },[filter])

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to={'/'}>
                        <h1 className="header__logo">
                            <BsFillCameraReelsFill/>
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
                            <NavLink className="header__link" to={'/series'}>
                                Сериалы
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className="header__link" to={'/'}>
                                Мультфильмы
                            </NavLink>
                        </li>
                    </ul>
                    <div className="header__right">
                        <input onSubmit={handleSearch} value="" className="header__search" type="search" placeholder='Поиск'/>
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