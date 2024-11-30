import React from 'react';

import { Aabout, Footer, Header, Skills, Ttestimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss'
const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <Aabout />
            <Work />
            <Skills />
            <Ttestimonial />
            <Footer />
        </div>
    );
}

export default App;