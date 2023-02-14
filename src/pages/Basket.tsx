import React, { useEffect, useState } from 'react';
import { CatalogProps } from '../components/shop/catalog/CatalogImg';
import cl from '../components/basket/Basket.module.css';
import BasketProduct from '../components/basket/BasketProduct';

export let basket: CatalogProps[] = [];

const Basket = () => {
    const [sumMany, setSumMany] = useState(0);
    const [basketLength, setBasketLength] = useState(basket.length);

    function remove(id: number) {
        let copy = [];
        for(let i=0; i< basket.length; i++){
            if(basket[i].id !== id) {
                copy.push(basket[i])
            }
        }
        basket = copy;
    };

    return (
        <div className={cl.myContainer}>
            {basketLength > 0
                ? <div className='container'>
                    {basket.map(elem =>
                        <BasketProduct 
                            key={elem.id} 
                            elem={elem} 
                            remove={remove} 
                            setSumMany={setSumMany}
                            basketLength={basketLength}
                            setBasketLength={setBasketLength}
                        />
                    )}
                    <div className={cl.subtotal}>
                        Итого: {sumMany} рублей
                    </div>
                </div>
                : <h1 className={cl.empty}>КОРЗИНА ПУСТА</h1>
            }
        </div>
    )
}

export default Basket;