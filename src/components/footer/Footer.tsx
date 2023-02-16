import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Footer.module.css';
import logo from '../../images/logo.png';
import vk from '../../images/vk.png';
import youtube from '../../images/youtube.png';
import telegram from '../../images/telegram.png';
import MyModal from '../modal/MyModal';
import Feedback from '../feedback/Feedback';

const Footer = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={cl.footer}>
            <div className='container'>

                <div className={cl.footerNav}>

                    <div className={cl.footerNav_logo}>
                        <div>
                            <img src={logo}/>
                        </div>
                        <p>ООО «БСМЕД» предлагает оптовые поставки косметологических препаратов в розничную продажу, в клиники и медицинские центры.</p>
                    </div>

                    <div className={cl.footerNav_link}>
                        <div className={cl.linksFlexColumn}>
                            <h2>ПОПУЛЯРНЫЕ БРЕНДЫ</h2>
                            <NavLink to='/shop'>BIO MEDICAL CARE</NavLink>
                            <NavLink to='/shop'>PEEL MEDICAL</NavLink>
                        </div>
                        <div>
                            <div className={cl.linksFlexColumn}>
                                <h2>ИНФОРМАЦИЯ</h2>
                                <NavLink to='/about'>О компании</NavLink>
                                <button onClick={() => setVisible(true)}>Обратная связь</button>
                            </div>
                            <div>
                                <h2>СЛЕДИТЕ ЗА НАМИ</h2>
                                <div className={cl.linksFlex}>
                                    <div>
                                        <a href='#'>
                                            <img src={vk} />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='#'>
                                            <img src={youtube} />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='#'>
                                            <img src={telegram} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={cl.footerPrivacyPolicy}>
                    <div>
                        <span style={{ fontWeight: 700 }}>BCMED</span><span style={{ color: '#FF0000' }}>.RU</span> &copy; 2013 - 2022
                    </div>
                    <div>
                        <NavLink
                            to='/privacyPolicy'
                            className={({ isActive }) => (isActive ? cl.active : '')}
                        >
                            Политика конфиденциальности
                        </NavLink>
                    </div>
                </div>

            </div>
            <MyModal visible={visible} setVisible={setVisible}>
                <Feedback setVisible={setVisible} />
            </MyModal> 
        </div>
    )
}

export default Footer;