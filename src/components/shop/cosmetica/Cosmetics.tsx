import React, { FC } from 'react';
import { CatalogProps } from '../catalog/CatalogImg';
import cl from './Cosmetics.module.css';

interface CosmeticsProps {
    allCatalogs: CatalogProps[];
}

const Cosmetics: FC<CosmeticsProps> = ({ allCatalogs }) => {

    return (
        <div className={cl.productsContainer}>
            {allCatalogs.map(catalog => (
                <div key={catalog.id} className={cl.productContainer} >
                    <div>
                        <img src={catalog.src} />
                    </div>
                    <h4>{catalog.title}</h4>
                    <p>{catalog.price} руб.</p>
                    <button onClick={(e) => { e.stopPropagation() }}>В корзину</button>
                </div>
            ))}
        </div>
    )
}

export default Cosmetics;