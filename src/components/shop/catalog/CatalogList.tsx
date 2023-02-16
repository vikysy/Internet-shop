import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cl from '../Shop.module.css';

interface CatalogList{
    allCategory: string;
    setAllCategory: any;
}

const CatalogList: FC<CatalogList> = ({allCategory, setAllCategory}) => {
    return (
        <div className={cl.catalogListContainer}>
            <h2>КАТАЛОГ ТОВАРОВ</h2>
            <NavLink 
                to='#' 
                onClick={(e) => {e.preventDefault(); setAllCategory('bmc')}}
            >
                Космецевтика Bio Medical Care
            </NavLink>
            <NavLink 
                to='#' 
                onClick={(e) => {e.preventDefault(); setAllCategory('peel')}}
            >
                Химические пилинги Peel Medical
            </NavLink>
            <NavLink 
                to='#' 
                onClick={(e) => {e.preventDefault(); setAllCategory('postPeel')}}
            >
                Постпилинговый уход
            </NavLink>
        </div>
    )
}

export default CatalogList;