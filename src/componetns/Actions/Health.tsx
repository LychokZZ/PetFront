import React, { useEffect, useState } from "react";
import '../../css/Health.css'
import { CiPill } from "react-icons/ci";
import { BiInjection } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

interface MedecinBag {
    icon : React.ReactNode;
    count: number;
    hp: number;
}
interface Medic {
    pill: MedecinBag;
    inject: MedecinBag;
}

interface PetHub {
    health: number;
}

interface ManageProduct {
    count: number;
    price: number
}
interface Product {
    pill : ManageProduct;
    inject : ManageProduct;
};


interface FoodProps {
    setProps: (element: keyof PetHub, value: number) => void;
    setProd: (foodName: keyof Product) => void
    CloseWindow: () => void;
    product : Product
}

const Health: React.FC<FoodProps> = ({ setProps  , product , setProd ,CloseWindow}) => {
    const username = localStorage.getItem('PetName')
    const [Medecine, setMedecine] = useState<Medic>({
        pill: {icon: <CiPill className="Piils"/>, count : product.pill.count  , hp: 25},
        inject: {icon: <BiInjection className="Piils"/>, count : product.inject.count  , hp: 90}
    })

    const Healing = (medName: keyof Medic, hp:number ) =>{
        if(Medecine[medName].count > 0 ){
            setMedecine((prev) => ({...prev, [medName]: {...prev[medName], count: Math.max(prev[medName].count - 1, 0)}}))
            setProd(medName)
            setProps("health", hp)
        }
    }
    const setFetchProduct = async () => {
        await fetch('https://petserver-h8xb.onrender.com/auth/Product', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                username: username,
                Pill: Medecine.pill.count,
                Inject: Medecine.inject.count,
            })
        }) 
    }
    useEffect(()=>{
        setFetchProduct()
    },[Medecine])
    return(
        <div>
            <div className="HealthWindow">
                <div className="Menu">Health <button className="Close" onClick={()=> CloseWindow()}><IoMdClose className="CloseAvatar"/></button></div>
                {Object.entries(Medecine).map(([key, { count , icon ,hp}]) => (
                        <div className="ListProdukt" key={key}>
                            
                            <div className="IconProdukt">{icon}</div>
                            <div>{count}</div>
                            
                            <button className="ButtonSpreed" onClick={()=> Healing(key as keyof Medic, hp)}>Лікувати</button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Health