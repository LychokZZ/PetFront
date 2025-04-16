import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../../css/Stylish.css"

interface Lock {
    Japan: string
    City: string
    Train: string
}

interface Close {
    CloseWindow: () => void;
    Seter: React.Dispatch<React.SetStateAction<boolean | null>>
    setBackName: React.Dispatch<React.SetStateAction<string>>
    Balance: number
    Lock:Lock
    setLock: React.Dispatch<React.SetStateAction<Lock>>;
}

const Stylish: React.FC<Close> = ({CloseWindow ,Seter , setBackName , Balance, Lock , setLock}) => {
const [Weather,setWeather] = useState<boolean | null>(localStorage.getItem('Weather') === 'true')
const [Balances,setBalanes] = useState(Balance)
const username = localStorage.getItem('PetName')
const [Locks,setLocks] = useState({
    Japan: Lock.Japan,
    City: Lock.City,
    Train: Lock.Train
})
const ChooseBack = (e: string) => {
    setBackName(e)
    localStorage.setItem('Style' ,e)
} 
useEffect(()=>{
    setLocks(Lock)
},[Lock])

useEffect(()=>{
    const setFetchLock = async () => {
        const response = await fetch('https://petserver-h8xb.onrender.com/auth/setLock', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                username: username,
                Japan: Locks.Japan,
                City: Locks.City,
                Train: Locks.Train
            })
        })
        if (!response.ok) {
                console.error('Failed to set lock:', response.statusText);
            }
    }

    setFetchLock()
},[Locks])

const Buy = (e:string) => {
    if(e === 'Japan' && Balances >= 2000){
        setLock((prev) =>({...prev , Japan: "Open" }))
        setLocks((prev) =>({...prev , Japan: "Open" }))
    }else if(e === 'City' && Balances >= 2000){
        setLock((prev) =>({...prev , City: "Open" }))
        setLocks((prev) =>({...prev , City: "Open" }))
    }else if(e === 'Train' && Balances >= 2000){
        setLock((prev) =>({...prev , Train: "Open" }))
        setLocks((prev) =>({...prev , Train: "Open" }))
    }
}

useEffect(()=>{
    Seter(Weather)
    localStorage.setItem('Weather' , JSON.stringify(Weather))
},[Weather,Seter])

    return (
        <div>
            <div className="Styler">
                <div className="Menu">Stylish <button className="Close" onClick={()=> CloseWindow()}><IoMdClose className="CloseAvatar"/></button></div>
                <div className="WeatherStyle">
                    <h3>Погода : </h3>
                    {Weather ? <button className="ButOn" onClick={()=>setWeather(false)}>ON</button> : <button className="ButOff" onClick={()=>setWeather(true)}>OFF</button>}
                </div>
                <div className="WeatherStyleSec">
                    <h3>Вибір фону : </h3>
                    <button className="ButBuy" onClick={()=>ChooseBack('Def')}>Defoult Style</button>
                    {Locks.Japan !== "Lock" ? <button className="JapanBut" onClick={()=>ChooseBack('Japan')}>Japan Style</button> : <button className="ButBuy" onClick={()=>Buy('Japan')}>Buy Japan 2000$</button> }
                    {Locks.City !== "Lock"?<button className="CityBut" onClick={()=>ChooseBack('City')}>City Style</button> : <button className="ButBuy" onClick={()=>Buy('City')}>Buy City 2000$ </button>  }
                    {Locks.Train !== "Lock"?  <button className="TrainBut" onClick={()=>ChooseBack('Train')}>Train Style</button> : <button className="ButBuy"onClick={()=>Buy('Train')} >Buy Train 2000$ </button> }
                </div>
            </div>
        </div>
    )
}

export default Stylish;