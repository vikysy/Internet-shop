import React, { FC, useEffect, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';
import './NaviBar.module.css';
import cl from './NaviBar.module.css';
import logo from '../../images/logo.png';
import basketIMG from '../../images/basket.png';
import user from '../../images/user.png';

interface NaviBar {
    basketLength: number,
}

const NaviBar: FC<NaviBar> = ({basketLength}) => {

    return (
        <Navbar className={cl.myNavbar} expand="lg">
            <Container>

                <NavLink to="/" className={cl.myNavbarBrand}>
                    <Image src={logo} />
                </NavLink>

                <NavbarToggle aria-controls="basic-navbar-nav" />

                <NavbarCollapse className={cl.myNavbarCollapse} id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            className={({ isActive }) => (isActive
                                ? [cl.myNavLink, cl.active].join(' ')
                                : cl.myNavLink)}
                            to="/"
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive
                                ? [cl.myNavLink, cl.active].join(' ')
                                : cl.myNavLink)}
                            to="/about"
                        >
                            О нас
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive
                                ? [cl.myNavLink, cl.active].join(' ')
                                : cl.myNavLink)}
                            to="/education"
                        >
                            Обучение
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive
                                ? [cl.myNavLink, cl.active].join(' ')
                                : cl.myNavLink)}
                            to="/shop"
                        >
                            Каталог
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive
                                ? [cl.myNavLink, cl.active].join(' ')
                                : cl.myNavLink)}
                            to="/contacts"
                        >
                            Контакты
                        </NavLink>
                    </Nav>
                </NavbarCollapse>

                <div className={cl.logoBasketSearch}>
                    <NavLink
                        className={({ isActive }) => (isActive
                            ? [cl.myNavLink, cl.active, cl.loginText].join(' ')
                            : [cl.myNavLink, cl.loginText].join(' '))}
                        to="/login"
                    >
                        Вход/Регистрация
                    </NavLink>
                    <NavLink
                        className={[cl.myNavLink, cl.loginImg].join(' ')}
                        to="/login"
                    >
                        <Image width={35} height={35} src={user} />
                    </NavLink>
                    <NavLink
                        className={[cl.myNavLink, cl.linkBasket].join(' ')}
                        to="/basket"
                    >
                        <div>{basketLength}</div>
                        <Image width={50} height={50} src={basketIMG} />
                    </NavLink>
                </div>

            </Container>
        </Navbar>
    )
}

export default NaviBar;