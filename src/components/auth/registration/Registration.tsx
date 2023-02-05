import React, { FC, useState } from 'react';
import users from '../../users/users';
import cl from '../Auth.module.css';

interface RegistrationProps {
    setIsLogin: (bol: boolean) => void;
}

const Registration: FC<RegistrationProps> = ({ setIsLogin }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function addNewUser() {
        users.push({
            id: Date.now(),
            email: login,
            password: password
        });

        setIsLogin(false);
    }

    function registrationUser() {
        if ((login.trim().length !== 0)
            && (password.trim().length !== 0)
            && (repeatPassword.trim().length !== 0)
            && password === repeatPassword) {
            users.find(user => {
                if (user.email === login) {
                    alert('Такой пользователь уже существует');
                    setLogin('');
                } else {
                    addNewUser();
                }
            });
        } else {
            alert('Введены разные пароли или email некорректен!');
            setPassword('');
            setRepeatPassword('');
        }
    }

    return (
        <div className='container'>
            <div className={cl.mainDFlex}>
                <div className={cl.flexOne}>
                    <h3>РЕГИСТРАЦИЯ</h3>
                    <p>Email</p>
                    <input
                        type='email'
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <p>Пароль</p>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>Повторите пароль</p>
                    <input
                        type='password'
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <button onClick={registrationUser}>
                        РЕГИСТРАЦИЯ
                    </button>
                </div>
                <div className={cl.flexTwo}>
                    <h3>ВОЙТИ</h3>
                    <p>Вход в Личный кабинет для косметологов и мед. специалистов. Если Вы только что зарегистрировались - проверьте свой email.  Ваш аккаунт должен быть подтвержден менеджером БСМЕД - подробнее</p>
                    <button onClick={() => setIsLogin(false)}>ВОЙТИ</button>
                </div>
            </div>
        </div>
    )
}

export default Registration;