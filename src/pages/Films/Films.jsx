import React, {useEffect} from 'react';
import image from "../../assets/slide.jpg";
import {BsBookmark} from "react-icons/bs";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineDisconnect, AiOutlineStar} from "react-icons/ai";

import {getCinema} from "../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";

const Films = () => {

    const dispatch = useDispatch()
    const {status, error, data} = useSelector((store) => store.cinema)


    useEffect(() => {
        dispatch(getCinema())
    },[])


    return (
        <section className="films">
            <div className="container">
                <h2 className="films__title">
                    Фильмы
                </h2>
                <div className="films__sort">
                    <select>
                        <option value="" selected>По популярности</option>
                        <option value="" >Дате</option>
                        <option value="" >Рейтингу</option>
                    </select>
                </div>
                <div className="films__filter">
                    <div className="films__filter-sort">
                        <select>
                            <option value="" disabled>Жанры</option>
                            <option value="" >Комедии</option>
                            <option value="" >Аниме</option>
                        </select>
                        <select>
                            <option value="" disabled>Страны</option>
                            <option value="" >США</option>
                            <option value="" >Япония</option>
                        </select>
                        <select>
                            <option value="" disabled>Годы</option>
                            <option value="" >2022</option>
                            <option value="" >2021</option>
                        </select>
                    </div>

                </div>

                {
                    status === 'loading' ?
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt=""/>
                        : status === 'resolve' ?   <div className="films__row">
                            {data.map((item) => (
                                <div key={item.id} className="film-list__card films__card">
                                    <div className="film-list__card-block">
                                        <img src={item.poster} alt=""/>
                                        <div className="film-list__card-info">
                                            <h3 className="film-list__card-rate">
                                                {item.rating}
                                            </h3>
                                            <p className="film-list__card-desc">
                                                {item.year} {item.genre}
                                            </p>
                                            <p className="film-list__card-time">
                                                {Math.floor(item.time / 60)} ч {item.time % 60} мин
                                            </p>
                                            <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
                                                <span className="film-list__card-icon">
                                            <ImMagicWand/>
                                               <span className="film-list__card-move">
                                               Похожее
                                            </span>
                                        </span>
                                                <span className="film-list__card-icon">
                                            <AiOutlineStar/>
                                               <span className="film-list__card-move">
                                                 Oценить
                                            </span>
                                        </span>
                                                <div className="film-list__card-icon">
                                                    <AiOutlineDisconnect/>
                                                    <p className="film-list__card-move">
                                                        Не нравится
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <h3 className="film-list__card-title">
                                        {item.title}
                                    </h3>
                                </div>
                            ))
                            }


                        </div> : <h2>{error}</h2>
                }


            </div>
        </section>
    );
};

export default Films;