import React, { FC, useState } from 'react';
import cl from '../components/auth/Auth.module.css';
import Login from '../components/auth/login/Login';
import Registration from '../components/auth/registration/Registration';

const Auth: FC = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    return (
        <div className={cl.myContainer}>
            {isAuth
                ? <div>Здесь должен быть личный кабинет c: </div>
                : isLogin
                    ? <Registration setIsLogin={setIsLogin} />
                    : <Login setIsLogin={setIsLogin} setIsAuth={setIsAuth} />
            }
        </div>
    )
}

export default Auth;