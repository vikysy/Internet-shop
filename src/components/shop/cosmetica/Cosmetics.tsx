import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { basket } from '../../../pages/Basket';
import { CatalogProps } from '../catalog/CatalogImg';
import Cosmetic from './Cosmetic';
import cl from './Cosmetics.module.css';

interface CosmeticsProps {
    allCatalogs: CatalogProps[];
}

const Cosmetics: FC<CosmeticsProps> = ({ allCatalogs }) => {
    const navigate = useNavigate();

    const addProductBasket = (catalog: any, event: any, id: number) => {
        event.stopPropagation();

        if (basket.length !== 0) {

            if (basket.find(elem => elem.id === id)) {
                catalog.count += 1;
            } else {
                basket.push(catalog);
            }
        } else {
            basket.push(catalog);
        }
    };

    return (
        <div className={cl.productsContainer} >
            {allCatalogs.map(catalog => (
                <Cosmetic key={catalog.id} catalog={catalog} addProductBasket={addProductBasket} navigate={navigate}/>
            ))}
        </div>
    )
}

export default Cosmetics;