import React, { useEffect, useState } from "react";
import "../../css/Game.css"
import { IoMdClose } from "react-icons/io";

interface PetHub {
    play: string
}

interface Props {
    Balance: number
    setBalances: (element: keyof PetHub,value: number) => void;
    CloseWindow: () => void;
}



const Game: React.FC<Props> = ({Balance , setBalances ,CloseWindow}) => {
    const [Balanc, setBalanc] = useState<number>(Balance)
    const [taps,setTaps] = useState<number>(0)
    const username = localStorage.getItem('PetName')
    const Tap = () => {
        setTaps((prev) => prev+1)
        setBalances("play",1)
        setBalanc((prev) => prev +1)
    }
    const setFetchProduct = async () => {
        await fetch('https://petserver-h8xb.onrender.com/auth/Product', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                username: username,
                Balance: Balanc
            })
        }) 
    }
    useEffect(()=>{
        setFetchProduct()
    },[Balanc]) 
    return (
        <div>
            <div className="GameWindow">
                <div className="Menu">Tap Clicker <button className="Close" onClick={()=> CloseWindow()}><IoMdClose className="CloseAvatar"/></button></div>
                <div className="GameBlock">
                    <div className="Balance">
                        <div>Cash : {Balanc}</div>
                        <div>Tap : {taps}</div>
                    </div>
                    <div>
                        <div className="ClickBut" onClick={()=> Tap()}>
                            <img className='GamePet' src={"Animals/pngwing.png"} alt="Miha" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Game