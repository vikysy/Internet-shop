import React, { FC, useState } from 'react';
import users from '../../users/users';
import cl from '../Auth.module.css';

interface LoginProps {
    setIsLogin: (bol: boolean) => void;
    setIsAuth: (bol: boolean) => void;
}

const Login: FC<LoginProps> = ({ setIsLogin, setIsAuth }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);



    function checkCanLogin() {
        if ((login.trim().length !== 0)
            && (password.trim().length !== 0)) {
            users.find(user => {
                if (user.email === login) {
                    if (user.email === login && user.password === password) {
                        setIsAuth(true);
                    } else {
                        alert('Неправильный логин или пароль');
                        setPassword('');
                    }
                } else {
                    alert('Пользователь не найден!');
                    setPassword('');
                }
            })
        } else {
            alert('Данные заполнены неполностью');
        }
    }

    return (
        <div className='container'>
            <div className={cl.mainDFlex}>
                <div className={cl.flexOne}>
                    <h3>ВХОД</h3>
                    <p>Email</p>
                    <input
                        type='email'
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <p>Пароль </p>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={checkCanLogin}>
                        ВОЙТИ
                    </button>
                    <div className={cl.formCheked}>
                        <label>
                            <input
                                type='checkbox'
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <p>Запомнить меня</p>
                        </label>
                        <a href='#'>Забыли пароль?</a>
                    </div>
                </div>
                <div className={cl.flexTwo}>
                    <h3>РЕГИСТРАЦИЯ (ДЛЯ КОСМЕТОЛОГОВ И МЕД. СПЕЦИАЛИСТОВ)</h3>
                    <p>Если Вы - дипломированный мед. специалист (косметолог, врач) или представитель мед. учреждения и заинтересованы в регулярной покупке нашей продукции - предлагаем зарегистрироваться. Регистрация на сайте простая и не займет много времени. Обратите внимание, что нужно будет подтвердить квалификацию мед. специалиста.</p>
                    <button onClick={() => setIsLogin(true)}>РЕГИСТРАЦИЯ</button>
                </div>
            </div>
        </div>
    )
}

export default Login;