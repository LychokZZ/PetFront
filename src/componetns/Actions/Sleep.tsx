import React, { useEffect, useState } from "react";
import '../../css/Sleep.css'
import { IoMdClose } from "react-icons/io";

interface PetHub {
    sleep: number;
}
interface FoodProps {
    setProps: (element: keyof PetHub, value: number) => void;
    setPet: (element:boolean) =>void 
    CloseWindow: () => void;
    currentSleep:number
}

const Sleep: React.FC<FoodProps> = ({ setProps , currentSleep , setPet , CloseWindow})  => {
    const [slepcount , setSlepCount] = useState(currentSleep)
    const [sleeping, setSleeping] = useState(false);
    useEffect(()=>{
        let interval: NodeJS.Timeout | null = null;

        if(sleeping===false ){
            interval = setInterval(() => {
                setSlepCount((prev) => prev-2)
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    },[sleeping])

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (sleeping && slepcount < 99) {
            interval = setInterval(() => {
                setProps("sleep", 2);
                setPet(true)
                setSlepCount((prev) => prev+2)
            }, 100);
        }else if(sleeping && slepcount > 97){
            setPet(false)
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [sleeping, slepcount, setProps, setPet]);

    useEffect(() => {
        if (slepcount >= 99) {
            setSleeping(false); 
        }
    }, [slepcount]);

    const goSleep =() => {
        if (slepcount < 99) {
            setSleeping(true);
        }
    }
    return(
        <div>
            <div className="SleepWindow">
                <div className="Menu">Sleep <button className="Close" onClick={()=> CloseWindow()}><IoMdClose className="CloseAvatar"/></button></div>
                {sleeping ? (
                    <div>
                        <h3 className="SleepText">Пінгвін спить...</h3>
                    </div>
                ) : slepcount >= 85 ? (
                    <h3 className="SleepText">Я не хочу спати!</h3>
                ) : (
                    <button className="ButtSleep" onClick={goSleep}>Спати</button>
                )}
                <div></div>
            </div>
        </div>
    )

}

export default Sleep