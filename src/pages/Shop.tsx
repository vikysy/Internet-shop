import React from 'react';
import CatalogList from '../components/shop/catalog/CatalogList';
import CatalogImg from '../components/shop/catalog/CatalogImg';
import cl from '../components/shop/Shop.module.css';

const Shop = () => {
    return (
        <div className='container'>
            <div className={cl.myContainer}>
                <CatalogList />
                <CatalogImg />
            </div>
        </div>
    )
}

export default Shop;