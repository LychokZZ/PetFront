import React from 'react';
import './css/App.css'
import PetGame from './componetns/PetGame';
import Auth from './componetns/Authorization';

const App = () =>{
    const Auths = localStorage.getItem("Authorization")
    return(
        <div className='App'>
            {Auths ? <PetGame /> : <Auth />}
        </div>
    )
}

export default App;

