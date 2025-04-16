import React, { useEffect, useState } from 'react';
import "../css/Pet.css"

interface Pingwin {
    Ping: Pinguine;
    Age: number
    Status: boolean
}

interface Pinguine {
    Small: string
    Midlle: string
    Senior: string
    
}

const Pet: React.FC<Pingwin> =({Ping, Age, Status}) =>{
    const [Pinki, setPinki] = useState(Ping.Small)
    console.log(Status)
    useEffect(()=>{
        if(Age <= 1000){
            setPinki(Ping.Small)
        }else if(Age >1000 && Age <3000){
            setPinki(Ping.Midlle)
        }else if(Age >3000){
            setPinki(Ping.Senior)
        }
    },[Age])
    return(
        <div>
            <div>
                
                <img className='StylePet' src={`${Status !== true ?  Pinki : ''}`} />
            </div>
        </div>
    )
}

export default Pet;
