import React, {useState} from 'react';
import {Link} from "react-router-dom";

const AdminPanel = () => {

    const [filmsShow, setFilmsShow] = useState('films');

    return (
        <section className="admin">
            <aside className="admin__aside">
                <h2 className="admin__aside-title">
                    Admin Panel
                </h2>
                <ul className="admin__aside-list">
                    <li className="admin__aside-item" onClick={() => setFilmsShow('films')}>
                        Films
                    </li>
                    <li className="admin__aside-item" onClick={() => setFilmsShow('users')}>
                        Users
                    </li>
                </ul>
                <Link className="login__route-link" to={'/'}>
                    Главная страница
                </Link>
            </aside>
            {
                filmsShow === 'films' ?
                    <div className="admin__info">
                        <h2 className="admin__info-title">
                            Все филмы
                        </h2>
                        <table className="admin__table" >
                            <tr className="admin__table-block">
                                <th className="admin__table-title">
                                    ID
                                </th>
                                <th className="admin__table-title">
                                    Название
                                </th>
                                <th className="admin__table-title">
                                    Год
                                </th>
                                <th className="admin__table-title">
                                    Жанр
                                </th>
                                <th className="admin__table-title">
                                    Статус
                                </th>
                                <th className="admin__table-title">
                                    Изменить
                                </th>
                                <th className="admin__table-title">
                                    Удалить
                                </th>
                            </tr>
                            <tr className="admin__table-block">
                                <td className="admin__table-info">
                                    1
                                </td>
                                <td className="admin__table-info">
                                    Человек-паук: Нет пути домой
                                </td>
                                <td className="admin__table-info">
                                    2021
                                </td>
                                <td className="admin__table-info">
                                    Приключения
                                </td>
                                <td className="admin__table-info">
                                    Free
                                </td>
                                <td className="admin__table-info">
                                    <button className="admin__table-btn">
                                        Изменить
                                    </button>
                                </td>
                                <td className="admin__table-info">
                                    <button className="admin__table-btn">
                                        X
                                    </button>
                                </td>
                            </tr>
                        </table >
                    </div>
                    :
                    <div className="admin__info">
                        <h2 className="admin__info-title">
                            Пользователи
                        </h2>
                        <table className="admin__table" >
                            <tr className="admin__table-block">
                                <th className="admin__table-title">
                                    ID
                                </th>
                                <th className="admin__table-title">
                                    Login
                                </th>
                                <th className="admin__table-title">
                                    Email
                                </th>
                                <th className="admin__table-title">
                                    Номер телефона
                                </th>
                                <th className="admin__table-title">
                                    Изменить
                                </th>
                                <th className="admin__table-title">
                                    Удалить
                                </th>
                            </tr>
                            <tr className="admin__table-block">
                                <td className="admin__table-info">
                                    1
                                </td>
                                <td className="admin__table-info">
                                    Muslim
                                </td>
                                <td className="admin__table-info">
                                    muslim@mail.ru
                                </td>
                                <td className="admin__table-info">
                                    +996555555555
                                </td>

                                <td className="admin__table-info">
                                    <button className="admin__table-btn">
                                        Изменить
                                    </button>
                                </td>
                                <td className="admin__table-info">
                                    <button className="admin__table-btn">
                                        X
                                    </button>
                                </td>
                            </tr>
                        </table >
                    </div>
            }

        </section>
    );
};

export default AdminPanel;