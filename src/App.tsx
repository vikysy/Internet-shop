import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import { Layout } from './components/Layout';
import Routing from './components/Routing';
// import { basket, Context } from './context/Context';

function App() {
    return (
        <>
            {/*<Context.Provider value={{
            basket: basket
        }}> */}
            <Layout />
            <Routing />
            <Footer />
            {/* </Context.Provider> */}
        </>
    );
}

export default App;
