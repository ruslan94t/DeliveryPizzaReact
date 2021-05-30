import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import {Header} from './components'
import {Cart, Home} from './Pages';



function App() {


    const clickPoKnopke = ()=>{
        alert('hello')
    } 

    return (
        <>
            <div className="wrapper">
                <Header />
        

                <div className="content">
                <Route  path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact/>
                </div>
            </div>
        </>
    );
}

export default App;
