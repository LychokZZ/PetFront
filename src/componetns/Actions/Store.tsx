import React, { useEffect, useState } from "react";
import "../../css/Store.css"
import { IoMdClose } from "react-icons/io";

interface ManageProduct {
    name: string
    count: number;
    price: number
}
interface Product {
    rice : ManageProduct;
    fish : ManageProduct;
    seaweed : ManageProduct; 
    meat : ManageProduct;
    milk : ManageProduct;
    salad : ManageProduct;
    pill : ManageProduct;
    inject : ManageProduct;
};

interface Productes {
    Balance: number
    setProductes: (element: keyof Product , price:number ) => void;
    product: Product
    CloseWindow: () => void;
}


const Store: React.FC<Productes> = ( {Balance, setProductes , product , CloseWindow} ) => {
    const username = localStorage.getItem('PetName')
    const [Balances , setBalances] = useState(Balance)
    const [Productical, setProductical] = useState({
        rice: product.rice.count,
        fish: product.fish.count,
        seaweed: product.seaweed.count,
        meat: product.meat.count,
        milk: product.milk.count,
        salad: product.salad.count,
        pill: product.pill.count,
        inject: product.inject.count,
    })
    const setProduct = (element: keyof Product, price:number) =>{ 
        if(Balances >= price){
            console.log(element)
            setProductical((prev) => ({
                ...prev,
                [element]: prev[element]+1
            }))
            setProductes(element , price)
            setBalances((prev) => Math.max(prev-price , 0))
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
                Rice: Productical.rice,
                Fish: Productical.fish,
                Seaweed:Productical.seaweed,
                Meat: Productical.meat,
                Milk: Productical.milk,
                Salad: Productical.salad,
                Pill: Productical.pill,
                Inject: Productical.inject,
                Balance: Balances
            })
        }) 
    }
    useEffect(()=>{
        setFetchProduct()
    },[Productical,Balances])
    return (
        <div>
            <div className="MenuWindow">
                <div className="Menu">Menu <span className="BalanceCount">Баланс: {Balances}</span> <button className="Close" onClick={()=> CloseWindow()}><IoMdClose className="CloseAvatar"/></button></div>
                {Object.entries(product).map(([key, {name, price }]) => (
                        <div className="ListProdukt" key={key}>
                            
                            <div className="NameProdukt">{name}</div>
                            <div>{price}</div>
                            
                            <button className="ButtonSpreedStore" onClick={()=>setProduct(key as keyof Product , price)}>Купити</button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Store;