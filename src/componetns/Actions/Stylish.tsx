import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../../css/Stylish.css"

interface Close {
    CloseWindow: () => void;
    Seter: React.Dispatch<React.SetStateAction<boolean | null>>
    setBackName: React.Dispatch<React.SetStateAction<string>>
}

const Stylish: React.FC<Close> = ({CloseWindow ,Seter , setBackName}) => {
const [Weather,setWeather] = useState<boolean | null>(localStorage.getItem('Weather') === 'true')

const ChooseBack = (e: string) => {
    setBackName(e)
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
                <div className="WeatherStyle">
                    <h3>Вибір фону : </h3>
                    <button onClick={()=>ChooseBack('Japan')}>Japan Style</button>
                    <button onClick={()=>ChooseBack('City')}>City Style</button>
                </div>
            </div>
        </div>
    )
}

export default Stylish;