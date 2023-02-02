import React from 'react';
import cl from './CompanyAdvantages.module.css';
import upload from '../main/upload.png';

const CompanyAdvantages = () => {
    return (
        <div className={cl.myContainer}>
            <div className='container'>
                <div className={cl.advantages}>
                    <div className={cl.child}>
                        <div>
                            <img src={upload} />
                        </div>
                        <h3>УНИКАЛЬНАЯ ПРОДУКЦИЯ</h3>
                        <p>Только высококачественная космецевтика – безопасная и эффективная</p>
                    </div>
                    <div className={cl.stick}/>
                    <div className={cl.child}>
                        <div>
                            <img src={upload}/>
                        </div>
                        <h3>РЕКЛАМНАЯ ПОДДЕРЖКА</h3>
                        <p>Обеспечиваем рекламную поддержку нашей продукции на всей территории РФ</p>
                    </div>
                    <div className={cl.stick}/>
                    <div className={cl.child}>
                        <div>
                            <img src={upload} />
                        </div>
                        <h3>ОБУЧЕНИЕ ПЕРСОНАЛА</h3>
                        <p>Обучаем работе с нашими препаратами – регулярно проводим семинары и вебинары</p>
                    </div>
                    <div className={cl.stick}/>
                    <div className={cl.child}>
                        <div>
                            <img src={upload} />
                        </div>
                        <h3>БЕЗОПАСНОСТЬ</h3>
                        <p>Безопасность и качество нашей продукции подтверждены международными сертификатами</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyAdvantages;