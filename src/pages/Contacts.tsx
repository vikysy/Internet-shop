import React, { useState } from 'react';
import cl from '../components/contacts/Contacts.module.css';
import Feedback from '../components/feedback/Feedback';
import MyModal from '../components/modal/MyModal';

const Contacts = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className={cl.myContainer}>
            <div className='container'>
                <div className={cl.contacts}>
                    <div className={cl.connection}>
                        <h4>НАШ АДРЕС</h4>
                        <div>
                            <div className={cl.row}>
                                <div className={cl.cell}>
                                    <h5>Офис</h5>
                                    <p>115191, г. Москва,
                                        Духовской переулок, 12</p>
                                </div>
                                <div className={cl.cell}>
                                    <h5>Часы работы офиса:</h5>
                                    <p>
                                        ПН-ПТ: <span style={{color: '#008000'}}>10:00 – 18:00</span>
                                    </p>
                                    <p>
                                        СБ-ВС: <span style={{color: '#FF0000'}}>выходной</span>
                                    </p>
                                </div>
                            </div>
                            <div className={cl.cell}>
                                <p>117393, г. Москва,
                                    ул. Профсоюзная, 56, БЦ «Cherry Tower» 7 эт.</p>
                            </div>
                            <div className={[cl.cell, cl.cellContacts].join(' ')}>
                                <h5>Контакты:</h5>
                                <h6>Email: <a href='mailto:info@bcmed.ru'>info@bcmed.ru</a></h6>
                                <h6>Тел: <a href='tel:+74954022307 '>+7 495 402-23-07 </a></h6>
                            </div>
                        </div>
                        <h4>ОБРАТНАЯ СВЯЗЬ</h4>
                        <p>Вы можете задать любые вопросы, связанные с нашими услугами и предлагаемой продукцией, используя форму обратной связи.</p>
                        <button onClick={() => setVisible(true)}>НАПИСАТЬ СООБЩЕНИЕ</button>
                    </div>
                    <div className={cl.map}>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab37e913a3b654941842b6f3be9703c9f981e5b12649f032c4cf5eb15f675f148&amp;source=constructor" max-width="785" width='100%' height="450" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
            <MyModal visible={visible} setVisible={setVisible}>
                <Feedback setVisible={setVisible}/>
            </MyModal>
        </div>
    )
}

export default Contacts;