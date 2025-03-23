import React from 'react';
import "../css/Pet.css"

interface Pingwin {
    Play: string;
    Sleep: string;
    Status: boolean
}

const Pet: React.FC<Pingwin> =({Play, Sleep, Status}) =>{
    return(
        <div>
            <div>
                
                <img className='StylePet' src={Status ? Sleep  : Play} alt="Miha" />
            </div>
        </div>
    )
}

export default Pet;
