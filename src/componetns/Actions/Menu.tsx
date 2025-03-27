import React, { useEffect, useState } from "react";
import '../../css/Menu.css'
import { GiBowlOfRice } from "react-icons/gi";
import { GiCannedFish } from "react-icons/gi";
import { GiAlgae } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { LuMilk } from "react-icons/lu";
import { LuSalad } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

interface FoodItem {
    count: number;
    name: string;
    icon: React.ReactNode;
    eat: number
}

interface Foods{
    rice : FoodItem
    fish : FoodItem  
    seaweed : FoodItem  
    meat : FoodItem 
    milk : FoodItem  
    salad : FoodItem 
}

interface PetHub {
    eat: number;
    sleep: number;
    play: number;
    health: number;
}
interface FoodProps {
    setProps: (element: keyof PetHub, value: number) => void;
    setProd: (foodName: keyof Foods) => void
    CloseWindow: () => void;
    product: Product;
}
interface ManageProduct {
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
};

const FoodMenu: React.FC<FoodProps> = ({ setProps, product, setProd ,CloseWindow}) =>{
const username = localStorage.getItem('PetName')
const [food, setFood] = useState<Foods>({
    rice: {count: product.rice.count , name: "Rice " , icon: <GiBowlOfRice className="FoodPoint"/>, eat : 12},
    fish: {count: product.fish.count , name: "Fish" , icon: <GiCannedFish className="FoodPoint"/>, eat : 10} ,
    seaweed: {count: product.seaweed.count , name: "SeaWeed" , icon: <GiAlgae className="FoodPoint"/>, eat : 6} ,
    meat: {count: product.meat.count , name: "Meat" , icon: <GiMeat className="FoodPoint"/>, eat : 15} ,
    milk: {count: product.milk.count , name: "Milk" , icon: <LuMilk className="FoodPoint"/>, eat : 4} ,
    salad: {count: product.salad.count , name: "Salad" , icon: <LuSalad className="FoodPoint"/>, eat : 8} ,
})
const Eating = (foodName: keyof Foods, eat:number ) =>{
    if(food[foodName].count > 0){
        setFood((prev) => ({...prev, [foodName]: {...prev[foodName], count: Math.max(prev[foodName].count - 1, 0)}}))
        setProd(foodName)
        setProps("eat", eat)
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
            Rice: food.rice.count,
            Fish: food.fish.count,
            Seaweed:food.seaweed.count,
            Meat: food.meat.count,
            Milk: food.milk.count,
            Salad: food.salad.count,
        })
    }) 
}
useEffect(()=>{
    setFetchProduct()
},[food])
    return(
        <div>
            <div className="MenuWindow">
                <div className="Menu">Menu <button className="Close" onClick={()=> CloseWindow()}><IoMdClose className="CloseAvatar"/></button></div>
                {Object.entries(food).map(([key, { count, name , icon ,eat}]) => (
                        <div className="ListProdukt" key={key}>
                            
                            <div className="NameProdukt">{name}: {icon}</div>
                            <div>{count}</div>
                            
                            <button className="ButtonSpreed" onClick={()=> Eating(key as keyof Foods, eat)}>Годувати</button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default FoodMenu