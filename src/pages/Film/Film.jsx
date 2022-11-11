import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getOneFilm} from "../../redux/reducers/oneFilm";

const Film = () => {

    const dispatch = useDispatch()
    const params = useParams();
    const {status, error,product} = useSelector((store) => store.onefilm)
    useEffect(() => {
        dispatch(getOneFilm(params.id))
    },[])
    console.log(product)

    return (
        <section className="film">
            <div className="container">
                <div className="film__row">
                    <div className="film__right">

                    </div>
                    <div className="film__info">
                        <h2 className="film__info-title">
                            {product.title}
                        </h2>
                        <div className="film__info-date">
                            <p className="film__info-year">
                                {product.year}
                            </p>
                            <p>
                                   {Math.floor(product.time / 60)} ч {product.time % 60} мин
                            </p>
                        </div>
                        <p className="film__info-genre">
                            Жанр: {product.genre}
                        </p>
                        <div className="film__info-rate">
                            <p>{product.rating}</p>
                            Рейтинг
                        </div>
                        <p className="film__info-desc">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Film;