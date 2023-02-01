import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import { Layout } from './components/Layout';
import Routing from './components/Routing';

function App() {
    return (
        <>
            <Layout />
            <Routing />
            <Footer />
        </>
    );
}

export default App;
