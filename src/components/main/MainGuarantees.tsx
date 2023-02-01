import React from 'react';
import upload from './upload.png';
import cl from './MainGuarantees.module.css';

const Guarantees = () => {
    return (
        <div className='container'>
            <div className={cl.guaranteesInfo}>
                <h1>НАШИ <span>ГАРАНТИИ</span></h1>
                <div className={cl.blockFlex}>
                    <div className={cl.flexElem} >
                        <div>
                            <img src={upload} />
                        </div>
                        <h3>
                            Качественная продукция
                        </h3>
                        <p>
                            Отбираем только высокоэффективную инновационную продукцию, отвечающую мировым стандартам качества.
                        </p>
                    </div>
                    <div className={cl.flexElem} >
                        <div>
                            <img src={upload} />
                        </div>
                        <h3>
                            Эксклюзивность
                        </h3>
                        <p>
                            В целях успешного развития Вашего бизнеса, мы соблюдаем условия эксклюзивности в регионе присутствия дистрибьютора
                        </p>
                    </div>
                    <div className={cl.flexElem} >
                        <div>
                            <img src={upload} />
                        </div>
                        <h3>
                            Информационная подержка
                        </h3>
                        <p>
                            Рекламная поддержка; выездное обучение работе с препаратами, презентации на местах, поддержка на региональных выставках
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guarantees;