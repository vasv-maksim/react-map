import React from 'react';
import Cartographic from './Cartographic/Cartographic';
import Header from './Header/Header';
import Panels from './Panels/Panels';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <Header />
                <div className='panelWrapper'>
                    <Panels />
                </div>
            <Cartographic />
    
        </div>
    );
}

export default App;
