import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import { Layout } from './components/Layout';
import Routing from './components/Routing';
import { basket } from './pages/Basket';

// export const BasketContext = React.createContext();

function App() {
    const [basketLength, setBasketLength] = useState(basket.length);
    
    return (
        <>
        {/* <BasketContext.Provider value={{
            basketLength,
            setBasketLength,
        }}> */}
            <Layout />
            <Routing />
            <Footer />
        {/* </BasketContext.Provider> */}
        </>
    );
}

export default App;
