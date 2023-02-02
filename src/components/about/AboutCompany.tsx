import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MyModal from '../modal/MyModal';
import cl from './AboutCompany.module.css';
import DetailsAboutCompany from './detailsAboutCompany/DetailsAC';

const AboutCompany = () => {

    const [visible, setVisibel] = useState(false);

    return (
        <div className={cl.myContainer}>
            <div className='container'>
                <div className={cl.aboutInfo}>
                    <h2>Компания БСМЕД. \ Коротко о нас и нашей <span>продукции</span></h2>
                    <div className={cl.blockGrid}>
                        <div>
                            <h4>Работаем с 2013 года</h4>
                            <p>Основное направление деятельности: учебно-методические услуги, поставка профессиональных препаратов в клиники и медицинские центры.</p>
                        </div>
                        <div>
                            <h4>БСМЕД сегодня:</h4>
                            <p>Основа нашего коллектива – специалисты с многолетним стажем работы именно на косметологическом рынке.</p>
                        </div>
                        <div>
                            <h4>Наша задача:</h4>
                            <p>Поставка инновационных косметологических средств, применение которых удобно для косметолога и комфортно для пациента.</p>
                        </div>
                        <div>
                            <h4>БСМЕД оказывает поддержку</h4>
                            <p>Обеспечиваем всестороннюю поддержку наших партнеров- клиник, салонов красоты и региональных дистрибьюторов. Обучаем работе с продукцией.</p>
                        </div>
                    </div>
                    <div className={cl.divBtn}>
                        <NavLink to='/shop'>КАТАЛОГ ПРОДУКЦИИ</NavLink>
                        <button onClick={() => setVisibel(true)}>ПОДРОБНО О КОМПАНИИ</button>
                    </div>
                </div>
            </div>
            <MyModal visible={visible} setVisible={setVisibel}>
                <DetailsAboutCompany />
            </MyModal>
        </div>
    )
}

export default AboutCompany;