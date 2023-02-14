import React, { FC } from 'react';
import { basket } from '../../../pages/Basket';
import { CatalogProps } from '../catalog/CatalogImg';
import cl from './Cosmetics.module.css';

interface CosmeticsProps {
    allCatalogs: CatalogProps[];
}

const Cosmetics: FC<CosmeticsProps> = ({ allCatalogs }) => {

    const addProductBasket = (catalog: any, event: any, id: number) => {
        event.stopPropagation();

        if (basket.length !== 0) {

            if(basket.find(elem => elem.id === id)) {
                catalog.count += 1;
            } else {
                basket.push(catalog);
            }
        } else {
            basket.push(catalog);
        }
    };

    return (
        <div className={cl.productsContainer}>
            {allCatalogs.map(catalog => (
                <div key={catalog.id} className={cl.productContainer} >
                    <div>
                        <img src={catalog.src} />
                    </div>
                    <h4>{catalog.title}</h4>
                    <p>{catalog.price} руб.</p>
                    <button onClick={(event) => addProductBasket(catalog, event, catalog.id)}>
                        В корзину
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cosmetics;