import React, { useState } from 'react';
import CatalogList from '../components/shop/catalog/CatalogList';
import CatalogImg from '../components/shop/catalog/CatalogImg';
import cl from '../components/shop/Shop.module.css';

const Shop = () => {
    const [allCategory, setAllCategory] = useState('allCategory');

    return (
        <div className='container'>
            <div className={cl.myContainer}>
                <CatalogList allCategory={allCategory} setAllCategory={setAllCategory} />
                <CatalogImg allCategory={allCategory} setAllCategory={setAllCategory} />
            </div>
        </div>
    )
}

export default Shop;