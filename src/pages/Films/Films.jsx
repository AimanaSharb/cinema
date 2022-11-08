import React from 'react';
import image from "../../assets/slide.jpg";
import {BsBookmark} from "react-icons/bs";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineDisconnect, AiOutlineStar} from "react-icons/ai";

const Films = () => {
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
                <div className="films__row">
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                    <div className="film-list__card films__card">
                        <div className="film-list__card-block">
                            <img src={image} alt=""/>
                            <div className="film-list__card-info">
                                <h3 className="film-list__card-rate">
                                    8.2
                                </h3>
                                <p className="film-list__card-desc">
                                    2022, Корея, Детектив
                                </p>
                                <p className="film-list__card-time">
                                    120 мин
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
                            Решение уйти
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Films;