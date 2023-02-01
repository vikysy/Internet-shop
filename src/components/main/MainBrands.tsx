import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './MainBrands.module.css';
import peelMedical from './peelMedical.png';
import bmc from './bmc.png';

const Brands = () => {
    return (
        <div className={cl.brandsContainer}>
            <div className='container'>
                <div className={cl.brandsFlex}>
                    <div className={cl.colOne}>
                        <h3>
                            <span>Бренды</span>, которые представляет BCMED
                        </h3>
                        <div className={cl.brandsLinkShop}>
                            <div>
                                <NavLink to="">
                                    <img src={bmc}/>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="">
                                    <img src={peelMedical}/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={cl.colTwo}>
                        <p>“BCMED” предлагает Вашему вниманию такую продукцию, как косметика и космецевтика, химические пилинги. <br />
                        Специально для Вас мы тщательно отбираем только высокоэффективную инновационную продукцию, отвечающую высоким мировым стандартам качества.</p>
                        <NavLink to='/shop'>Каталог продукции</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands;