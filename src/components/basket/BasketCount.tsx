import React, { FC } from "react";
import { CatalogProps } from "../shop/catalog/CatalogImg";
import cl from './Basket.module.css';

interface BasketCountProps{
    elem: CatalogProps;
    count: number;
    setCount: any;
}

const BasketCount: FC<BasketCountProps> = ({elem, count, setCount}) => {

    const addCount = () => {
        elem.count += 1;
        setCount(count + 1);
    };

    const subtractCount = () => {
        if(elem.count > 1) {
            elem.count -= 1;
            setCount(count - 1);
        }
    };

    return (
        <div className={cl.count}>
            <button onClick={addCount} >+</button>
            <div>{count}</div>
            <button onClick={subtractCount}>-</button>
        </div>
    )
};

export default BasketCount;