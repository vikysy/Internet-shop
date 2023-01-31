import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Auth from '../pages/Auth'
import Basket from '../pages/Basket'
import Main from '../pages/Main'
import ProductCategory from '../pages/ProductCategory'
import ProductCategoryCosmetica from '../pages/ProductCategoryCosmetica'
import Registration from '../pages/Registration'
import Shop from '../pages/Shop'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={< Main />} />
                <Route path='/login' element={< Auth />} />
                <Route path='/registration' element={< Registration />} />
                <Route path='/about' element={< About />} />
                <Route path='/shop' element={< Shop />} />
                <Route path='/basket' element={< Basket />} />
                <Route path='/category' element={< ProductCategory />} />
                <Route path='/category/:id' element={< ProductCategoryCosmetica />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default Routing