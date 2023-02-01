import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <div className={cl.myContainerHeader}>
            <div className='container'>
                <div className={cl.headerInfo}>
                    <h2>НЕ ПРОПУСТИ!</h2>
                    <h3>СЕМИНАРЫ ДЛЯ КОСМЕТОЛОГОВ</h3>
                    <p>Посмотрите расписание. Выберите семинар. Запишитесь онлайн или по телефону. Теория + практика</p>
                    <NavLink to='/education'>Смотреть расписание</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;