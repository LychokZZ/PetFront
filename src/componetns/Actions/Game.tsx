import React, { useEffect, useState } from "react";
import "../../css/Game.css"
import { IoMdClose } from "react-icons/io";
import Invest from "./GameComponent/Invest";
import Cliker from "./GameComponent/Cliker";
interface PetHub {
    play: string
}
interface Busine {
    Market: number
    Small: number
    Pump: number
    Plant: number
}

interface Props {
    Balance: number
    setBalances: (element: keyof PetHub,value: number) => void;
    CloseWindow: () => void;
}



const Game: React.FC<Props> = ({Balance , setBalances ,CloseWindow}) => {
    const [Balanc, setBalanc] = useState<number>(Balance)
    const [taps,setTaps] = useState<number>(0)
    const [CashHour, setCashHour] = useState(0)
    const [Game , setGame] = useState(true)
    const [isFetched , setisFetched] = useState(false)
    const [Busines ,setBusines] = useState({
        Market: 0,
        Small: 0,
        Pump: 0,
        Plant: 0
    })
    const username = localStorage.getItem('PetName')
    const Tap = () => {
        setTaps((prev) => prev+1)
        setBalances("play",1)
        setBalanc((prev) => prev +1)
    }
    useEffect(()=>{
        console.log(Balanc)
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
        
        setFetchProduct()
    },[Balanc])
    useEffect(()=>{
        const GetInvest = async () =>{
            const inve = await fetch(`https://petserver-h8xb.onrender.com/auth/getInvest?username=${username}`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await inve.json();
            console.log(data)
            setisFetched(true)
            setBusines({
                Market: data.Market,
                Small: data.Small,
                Pump: data.Pump,
                Plant: data.Plant
            })
        }

        GetInvest()    
    },[username])

    useEffect(()=>{
        if (!isFetched) return;
        const setFetchInvest = async () => {
            await fetch('https://petserver-h8xb.onrender.com/auth/setInvest', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    Market: Busines.Market,
                    Small: Busines.Small,
                    Pump: Busines.Pump,
                    Plant: Busines.Plant

                })
            }) 
        }

        setFetchInvest()
    },[Busines,isFetched,username])
    
    useEffect(() => {
        const intervals: NodeJS.Timer[] = [];

        if (Busines.Market !== 0) {
            var cashM: number | undefined = 1.5 * Busines.Market;
            const intervalM: NodeJS.Timer = setInterval(() => {
                setBalanc(prev => prev + (cashM ?? 0));
            }, 5000);
            intervals.push(intervalM);
        }
    
        if (Busines.Small !== 0) {
            var cashS: number | undefined = 10 * Busines.Small;
            const intervalS: NodeJS.Timer = setInterval(() => {
                setBalanc(prev => prev + (cashS ?? 0));
            }, 5000);
            intervals.push(intervalS);
        }
    
        if (Busines.Pump !== 0) {
            var cashP: number | undefined = 25 * Busines.Pump; 
            const intervalP: NodeJS.Timer = setInterval(() => {
                setBalanc(prev => prev + (cashP ?? 0));
            }, 5000);
            intervals.push(intervalP);
        }
    
        if (Busines.Plant !== 0) {
            var cashZ: number | undefined = 50 * Busines.Plant; 
            const intervalZ: NodeJS.Timer = setInterval(() => {
                setBalanc(prev => prev + (cashZ ?? 0));
            }, 5000);
            intervals.push(intervalZ);
        }
        
        const sum = (cashM ?? 0) + (cashS ?? 0) + (cashP ?? 0) + (cashZ ?? 0);
        setCashHour(sum)
        return () => {
            intervals.forEach(clearInterval);
        };
    }, [Busines,username]);

    const setBusin =( element: keyof Busine, number:number , price: number  )  =>{
        if(Balanc >= price){
            setBusines((prev)=>({
                ...prev,
                [element]: prev[element] + number
            }))
            setBalanc((prev)=>prev - price)
        }else alert("No cash!!")
            
    }
    return (
        <div className="GameWindow">

            <div className="Menu">Game 
                <button className="ButChoose" onClick={()=> setGame(true)} >Cliker</button>
                <button className="ButChoose" onClick={()=> setGame(false)} >Invest</button>
                <button className="Close" onClick={async () => {CloseWindow();}}><IoMdClose className="CloseAvatar"/></button>
            </div>
            {Game ?<Cliker Tap = {Tap} Balanc = {Balanc} taps ={taps}/> : <Invest setBusin={setBusin} Balanc = {Balanc} CashHour ={CashHour} Businer = {Busines}/>}
        </div>
    )
}

export default Game