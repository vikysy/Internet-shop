import React, { FC, useEffect, useState } from 'react';
import { sortFull } from '../../../sorting/sortSelect';
import catalogs from '../API/CatalogAPI';
import Cosmetics from '../cosmetica/Cosmetics';
import cl from '../Shop.module.css';
import bmc from './bmc.jpg';
import peel from './peel.jpg';
import postPeel from './postPeel.jpg';

export interface CatalogProps {
    id: number,
    value: string | string[],
    src: HTMLImageElement | File | string | undefined | any,
    title: string,
    price: number,
    count: number,
    p: string,
    description: string[],
}

const CatalogImg: FC = () => {

    const [allCatalogs, setAllCatalogs] = useState<CatalogProps[]>(catalogs);
    let newCategoryCatalogs: CatalogProps[] = [];

    const [allCategory, setAllCategory] = useState('allCategory');
    const [typeSkin, setTypeSkin] = useState('allSkin');
    const [price, setPrice] = useState('');

    useEffect(() => {
        sortFull(newCategoryCatalogs, allCategory, setAllCatalogs, typeSkin, price, allCatalogs)
    }, [allCategory, typeSkin, price])

    return (
        <div style={{ maxWidth: '886px', width: '100%' }}>
            <div className={cl.catalogImgContainer}>
                <div onClick={() => setAllCategory('bmc')}>
                    <div>
                        <img src={bmc} />
                    </div>
                    <p>КОСМЕЦЕВТИКА BIO MEDICAL CARE</p>
                </div>
                <div onClick={() => setAllCategory('peel')}>
                    <div>
                        <img src={peel} />
                    </div>
                    <p>ХИМИЧЕСКИЕ ПИЛИНГИ PEEL MEDICAL</p>
                </div>
                <div onClick={() => setAllCategory('postPeel')}>
                    <div>
                        <img src={postPeel} />
                    </div>
                    <p>ПОСТПИЛИНГОВЫЙ УХОД</p>
                </div>
            </div>

            <div className={cl.blockSelect}>
                <select value={allCategory} onChange={(e) => setAllCategory(e.target.value)}>
                    <option value='allCategory' >Все категории</option>
                    <option value='bmc' >Космецевтика Bio Medical Care</option>
                    <option value='peel' >Химические пилинги Peel Medical</option>
                    <option value='postPeel' >Постпилинговый уход</option>
                </select>
                <select value={typeSkin} onChange={(e) => setTypeSkin(e.target.value)}>
                    <option value='allSkin'>Для всех типов кожи</option>
                    <option value='oily'>Для жирной кожи</option>
                    <option value='sensitive'>Для чувствительной кожи</option>
                    <option value='normal'>Для нормальной и сухой кожи</option>
                </select>
                <select value={price} onChange={(e) => setPrice(e.target.value)}>
                    <option value='' disabled>Сортировать по цене:</option>
                    <option value='rise'>По возрастанию цены</option>
                    <option value='wane'>По убыванию цены</option>
                </select>
            </div>

            {allCatalogs.length > 0
                ? <Cosmetics
                    allCatalogs={allCatalogs}
                />
                : <h1 style={{ fontSize: '58px', textAlign: 'center', color: '#333333', marginTop: '20px' }}>Не найдено</h1>
            }
        </div>
    )
}

export default CatalogImg;