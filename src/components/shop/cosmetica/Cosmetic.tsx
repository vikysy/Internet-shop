import React, { useState } from 'react';
import { basket } from '../../../pages/Basket';
import cl from './Cosmetics.module.css';

const Cosmetic = ({ catalog, addProductBasket, navigate }: any) => {
    const [inBasket, setInBasket] = useState(checkInBasket);

    function checkInBasket() {
        if(basket.length > 0) {
            return basket.find(elem => elem.id === catalog.id)
        } else {
            return false;
        }
    }

    function replaceBtn() {
        setInBasket(true);
    }

    return (
        <div key={catalog.id} className={cl.productContainer} onClick={() => navigate(`/category/` + catalog.id)} >
            <div>
                <img src={catalog.src} />
            </div>
            <h4>{catalog.title}</h4>
            <p>{catalog.price} руб.</p>
            {inBasket 
                ? <button className={cl.inBasketBtn} onClick={(e) => {e.preventDefault(); e.stopPropagation()}}>
                    В корзине
                    </button>
                : <button onClick={(event) => {addProductBasket(catalog, event, catalog.id); replaceBtn()}}>
                    В корзину
                </button>
            }
        </div>
    )
}

export default Cosmetic