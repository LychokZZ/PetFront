import React, { useEffect } from 'react';
import "../css/HudBar.css"
import { setInterval } from 'timers/promises';

interface PetHud {
    eat: number;
    sleep: number;
    play: number;
    health: number;
  }

const Styler =(progress:number): React.CSSProperties => {
    return {
        width: `${progress}%`,
        height: "100%",
        background: "#87b683",
    };
};
interface HudBarProps {
    PetHud: PetHud;
}
const HudBar: React.FC<HudBarProps> =({PetHud}) =>{
    const username = localStorage.getItem('PetName')

    const setFetchStan = async () => {
        if(PetHud.eat !== 100){
            await fetch('http://localhost:5001/auth/setStan', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    Eat: PetHud.eat,
                    Sleep: PetHud.sleep,
                    Play: PetHud.play,
                    Health: PetHud.health
                })
            }) 
        }
    }
    useEffect(()=>{
        setFetchStan()
    },[PetHud])
    return(
        <div>
            <div className='Hud'>
                <div className='CentralAll'>
                    <div className='BlockHud'>
                        <div style={Styler(PetHud.eat)} ></div>
                    </div>
                    Eat
                </div>
                <div className='CentralAll'>
                    <div className='BlockHud'>
                        <div style={Styler(PetHud.sleep)}></div>
                    </div>
                    Sleep
                </div>
                <div className='CentralAll'>
                    <div className='BlockHud'>
                        <div style={Styler(PetHud.play)}></div>
                    </div>
                    Play
                </div>
                <div className='CentralAll'>
                    <div className='BlockHud'>
                        <div style={Styler(PetHud.health)}></div>
                    </div>
                    Health
                </div>
            </div>
        </div>
    )
}

export default HudBar;
