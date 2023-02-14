import React, { useEffect, useState } from 'react'
import { basket } from '../../pages/Basket';
import cl from './Basket.module.css';
import BasketCount from './BasketCount';

const BasketProduct = ({elem, remove, setSumMany, basketLength, setBasketLength}:any) => {
    const [count, setCount] = useState(elem.count);
    const [sumOne, setSumOne] = useState(elem.price * elem.count);
    const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

    useEffect(() => {
        setSumOne(elem.price * count)
        setSumMany(basket.reduce((sum, current) => sum + (current.price * current.count), 0))
    }, [count, basketLength])

    const calcScreenSize = (title: string) => {
        if (clientWidth < 768) {
            if(title.length > 25) {
                return title.substring(0, 25) + '...'; 
            }

        } else {
            return title
        };
    };

    return (
        <div key={elem.id} className={cl.elemContainer}>
            <div className={cl.blockLeft}>
                <div>
                    <img src={elem.src} />
                </div>
                <h3>{calcScreenSize(elem.title)}</h3>
            </div>
            <div className={cl.blockRight}>
                <BasketCount elem={elem} count={count} setCount={setCount}/>
                <div className={cl.price}>
                    {sumOne} рублей
                </div>
                <button className={cl.remove} onClick={() => {remove(elem.id); setBasketLength(basket.length)}}>Удалить</button>
            </div>
        </div>
    )
}

export default BasketProduct