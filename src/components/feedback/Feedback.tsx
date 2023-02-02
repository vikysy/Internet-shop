import React, { FC, useState } from 'react';
import cl from './Feedback.module.css';

interface FeedbackProps {
    visible?: boolean;
    setVisible: (bol: boolean) => void;
}

const Feedback: FC<FeedbackProps> = ({ setVisible }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <h3>ОТПРАВИТЬ СООБЩЕНИЕ</h3>
            <form>
                <div className={cl.row}>
                    <div className={cl.col}>
                        <p>Ваше имя</p>
                        <input 
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className={cl.col}>
                        <p>Ваш Email</p>
                        <input 
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                </div>
                <div className={cl.row}>
                    <div className={cl.col}>
                        <p>Город</p>
                        <input 
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)} 
                        />
                    </div>
                    <div className={cl.col}>
                        <p>Номер телефона</p>
                        <input 
                            type='tel'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} 
                            required
                        />
                    </div>
                </div>
                <div>
                    <p>Ваше сообщение</p>
                    <textarea />
                </div>
                <label>
                    <input 
                        type='checkbox' 
                        checked={checked} 
                        onChange={() => setChecked(!checked)}
                        required
                    />
                    <p>Я принимаю соглашение сайта об обработке персональных данных.</p>
                </label>
                <button 
                    type='submit'
                >
                    Отправить
                </button>
            </form>
        </div>
    )
}

export default Feedback;