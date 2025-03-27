import React, { useEffect, useState } from 'react';
import "../css/HudBar.css"

interface PetHud {
    eat: number;
    sleep: number;
    play: number;
    health: number;
    lvl: number;
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
    const [LVLs, setLvls] = useState('')
    const setFetchStan = async () => {
        if(PetHud.eat !== 100){
            await fetch('https://petserver-h8xb.onrender.com/auth/setStan', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    Eat: PetHud.eat,
                    Sleep: PetHud.sleep,
                    Play: PetHud.play,
                    Health: PetHud.health,
                    LVL : PetHud.lvl
                })
            }) 
        }
    }
    useEffect(()=>{
        setFetchStan()
    },[PetHud])

    useEffect(()=>{
        let l = PetHud.lvl.toString();
        let word = l.split('')
        if(word.length > 5){
            setLvls(word[0] + word[1])
        }else setLvls(word[0])
    },[PetHud])
    return(
        <div>
            <div className='Hud'>
            <div className='CentralAll'>
                    <div>{LVLs}</div>
                    Lvl
                </div>
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
