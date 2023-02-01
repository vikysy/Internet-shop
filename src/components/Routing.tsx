import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Auth from '../pages/Auth'
import Basket from '../pages/Basket'
import Contacts from '../pages/Contacts'
import Education from '../pages/Education'
import Main from '../pages/Main'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import ProductCategory from '../pages/ProductCategory'
import ProductCategoryCosmetica from '../pages/ProductCategoryCosmetica'
import Shop from '../pages/Shop'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={< Main />} />
                <Route path='/login' element={< Auth />} />
                <Route path='/about' element={< About />} />
                <Route path='/education' element={< Education />} />
                <Route path='/contacts' element={< Contacts />} />
                <Route path='/shop' element={< Shop />} />
                <Route path='/basket' element={< Basket />} />
                <Route path='/category' element={< ProductCategory />} />
                <Route path='/category/:id' element={< ProductCategoryCosmetica />} />
                <Route path='/privacyPolicy' element={< PrivacyPolicy />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default Routing