import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cl from '../Shop.module.css';

const CatalogList: FC = () => {
    return (
        <div className={cl.catalogListContainer}>
            <h2>КАТАЛОГ ТОВАРОВ</h2>
            <NavLink to=''>Космецевтика Bio Medical Care</NavLink>
            <NavLink to=''>Химические пилинги Peel Medical</NavLink>
            <NavLink to=''>Постпилинговый уход</NavLink>
        </div>
    )
}

export default CatalogList;