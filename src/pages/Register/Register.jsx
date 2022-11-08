import React from 'react';
import {Link} from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi";

const Register = () => {
    return (
        <section className="login">
            <div className="login__block">
                <form className="login__form">
                    <h2>Регистрация</h2>
                    <div className="login__form-block">
                        <input type="email" className="login__form-input" placeholder="Введите email"/>
                    </div>
                    <div className="login__form-block">
                        <input type="password" className="login__form-input" placeholder="Ввдите пароль"/>
                    </div>
                    <div className="login__form-block">
                        <input type="password" className="login__form-input" placeholder="Потвердить пароль"/>
                    </div>
                    <div className="login__form-block">
                        <button className="login__form-btn" type={"submit"}>
                            Зарегистрироваться
                        </button>
                    </div>
                    <p className="login__reg">
                        Уже есть профиль ?
                        <Link className="login__reg-link" to={'/login'}>
                            Войти
                        </Link>
                    </p>

                </form>
                <div className="login__route">
                    <BiHomeSmile className="login__route-icon"/>
                    <Link className="login__route-link" to={'/'}>
                        Вернуться на главную страницу
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Register;