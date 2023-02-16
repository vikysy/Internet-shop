import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import cl from '../components/productCategoryId/ProductCategoryCosmetica.module.css';
import catalogs from '../components/shop/API/CatalogAPI';
import BasketCount from '../components/basket/BasketCount';
import { basket } from './Basket';

const ProductCategoryCosmetica = () => {
    const params = useParams();
    const [count, setCount] = useState(catalogs[Number(params.id)].count);
    const [inBasket, setInBasket] = useState(buttonRender);

    function buttonRender() {
        if(basket.length > 0 && basket.find(item => item.id === Number(params.id))){
            return true;
        } else {
            return false;
        }
    };

    function addInBasket(elem:any) {
        setInBasket(true);
        basket.push(elem);
    }

    return (
        <div className={cl.myContainer}>
            {catalogs.map(elem => (elem.id === Number(params.id)) && (
                <div key={elem.id} className="container">
                    <div className={cl.blockTop}>
                        <div className={cl.blockIMG}>
                            <img src={elem.src} />
                        </div>
                        <div className={cl.blockInfo}>
                            <h2>{elem.title}</h2>
                            <p>{elem.p}</p>
                            <p><b>{elem.price} руб.</b></p>
                            <div>
                                {inBasket
                                    ? <BasketCount elem={elem} count={count} setCount={setCount} />
                                    : <button onClick={() => addInBasket(elem)} className={cl.inBasket}>В корзину</button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={cl.blockBottom}>
                        <h3>Описание</h3>
                        <div>{elem.description.map((item, index) => (
                            <p key={elem.id + index}>{item}</p>
                        ))}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductCategoryCosmetica;