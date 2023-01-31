import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Footer.module.css';

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className='container'>
                <div></div>
                <div className={cl.footerPrivacyPolicy}>
                    <div>
                        <span style={{fontWeight: 700}}>BCMED</span><span style={{color: '#FF0000'}}>.RU</span> &copy; 2013 - 2022
                    </div>
                    <div>
                        <NavLink to='/privacyPolicy'>Политика конфиденциальности</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;