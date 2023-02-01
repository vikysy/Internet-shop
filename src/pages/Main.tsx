import React from 'react';
import Brands from '../components/main/MainBrands';
import Guarantees from '../components/main/MainGuarantees';
import MainHeader from '../components/main/MainHeader';


const Main = () => {
    return (
        <>
            <MainHeader />
            <Guarantees />
            <Brands />
        </>
    )
}

export default Main;