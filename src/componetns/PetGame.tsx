import React, {useState, useEffect} from 'react';
import '../css/PetGame.css'
import '../css/Background.css'
import '../css/Pogoda.css'
import HudBar from './HudBar';
import Pet from './Pet';
import Action from './Action';
import FoodMenu from './Actions/Menu';
import Sleep from './Actions/Sleep';
import Health from './Actions/Health';
import Store from './Actions/Store';
import Game from './Actions/Game';
import MessagePet from './MessagePet';
import Settings from './Actions/Settings';
import Pogoda from './Pogoda';

interface PetHub {
    eat: number;
    sleep: number;
    play: number;
    health: number;
    store: number;
    lvl: number;
}
interface ManageProduct {
    name : string;
    count: number;
    price: number;
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

interface Pinguine {
    Play: string;
    Sleep: string
}

const PetGame = () =>{
    const username = localStorage.getItem('PetName')
    const [Balance, setBalance] = useState(1000)
    const [Emotion, setEmotion] = useState('')
    const [Status , setStatus] = useState(false)
    const [Ping,setPing] = useState<Pinguine>({
        Play: 'Animals/pngwing.png',
        Sleep: 'Animals/sleepPing.png'
    })
    const [Product, setProduct] = useState<Product>({
        rice: {name: "rice" , count: 0 , price: 25},
        fish: {name: "fish" ,count: 0 , price: 50},
        seaweed: {name: "seaweed" ,count: 0 , price: 60},
        meat: {name: "meat" ,count: 0 , price: 40},
        milk: {name: "milk" ,count: 0 , price: 30},
        salad: {name: "salad" ,count: 0 , price: 15},
        pill : {name: "pill" ,count: 0 , price: 50},
        inject : {name: "inject" ,count: 0 , price: 100},
    })
    const [Menu, setMenu] = useState<React.ReactNode | null>(null)
    const [PetHub , setPetHub] = useState<PetHub>({
        eat: 100,
        sleep: 100,
        play: 100,
        health: 100,
        lvl: 100,
        store: 0,
    })
    
    useEffect(()=>{
        const getProduct = async () => {
            try {
                const product = await fetch(`https://petserver-h8xb.onrender.com/auth/getProduct?username=${username}`, {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' }
                });
        
                if (!product.ok) {
                    throw new Error(`Ошибка: ${product.status} ${product.statusText}`);
                }
                
                const data = await product.json();
                if(data.Balance !== null){
                    setBalance(data.Balance)
                }else{
                    setBalance(1000)
                }
                setProduct(prevState => ({
                    rice: { ...prevState.rice, count: data.Rice },
                    fish: { ...prevState.fish, count: data.Fish },
                    seaweed: { ...prevState.seaweed, count: data.Seaweed },
                    meat: { ...prevState.meat, count: data.Meat },
                    milk: { ...prevState.milk, count: data.Milk },
                    salad: { ...prevState.salad, count: data.Salad },
                    pill: { ...prevState.pill, count: data.Pill },
                    inject: { ...prevState.inject, count: data.Inject },
                }));
                
                return data
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };
        getProduct();
    },[])


    useEffect(()=>{
        const getStan = async () => {
            try {
                const Stan = await fetch(`https://petserver-h8xb.onrender.com/auth/getStan?username=${username}`, {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' }
                });
        
                if (!Stan.ok) {
                    throw new Error(`Ошибка: ${Stan.status} ${Stan.statusText}`);
                }
                const Stans = await Stan.json();
                if(Stans.LVL >= 100){
                    setPetHub({
                        eat: Stans.Eat,
                        sleep: Stans.Sleep,
                        play: Stans.Play,
                        health: Stans.Health,
                        lvl: Stans.LVL,
                        store: 0,
                    })
                }else{
                    setPetHub({
                        eat: Stans.Eat,
                        sleep: Stans.Sleep,
                        play: Stans.Play,
                        health: Stans.Health,
                        lvl: 100,
                        store: 0,
                    })

                }
                return Stans;
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        }
        getStan();
    },[])

    useEffect(()=>{
        setInterval(()=>{
            let Emo = ['Up']
            if(Math.floor(Math.random() * 200) > 80 ){
                setEmotion(Emo[Math.floor(Math.random() * 2)])
            }
        },(1000 *60))
    },[])
    useEffect(() => {
        const interval = setInterval(() => {
            setPetHub((prev) => ({
                eat: Math.max(prev.eat - 3, 0),
                sleep: Math.max(prev.sleep - 2, 0),
                play: Math.max(prev.play - 3, 0),
                health: Math.max(prev.health - 1, 0),
                lvl: prev.lvl,
                store: 0,
            }));
        }, (1000*90)); 
    
        return () => clearInterval(interval); 
    }, []);

    const setProps = (element: keyof PetHub, value: number) => {
        setPing((prev) => prev)
        setPetHub((prev) => ({
            ...prev,
            [element]: Math.min(prev[element] + value, 100),
        }));
        setPetHub((prev) => ({
            ...prev,
            lvl: prev.lvl + 2,
        }));
    };
    const BalanceAdd = (element: keyof PetHub, value: number) => {
        setBalance((prev) => prev + value);
        setPetHub((prev) => ({
            ...prev,
            [element]: Math.min(prev[element] + 1, 100),
        }));
        setPetHub((prev) => ({
            ...prev,
            lvl: prev.lvl + 0.5,
        }));

    }
    const setProductes = (element: keyof Product , price: number) => {
        setBalance((prev)=>prev - price)
        setProduct((prev) => ({
            ...prev,
            [element]: {
                ...prev[element], 
                count: prev[element].count + 1 
            }
        }));
        
    };
    const setProd = (foodName: keyof Product) => {
        setProduct((prev) => ({
            ...prev,
            [foodName]: {
                ...prev[foodName], 
                count: prev[foodName].count - 1 
            }
        }));
    }
    const CloseWindow = () => {
        return setMenu(null)
    }
    const ChooseMenu =(element: string) => {
        if(element === "eat"){
            return setMenu(<FoodMenu setProps = {setProps} product = {Product} setProd = {setProd} CloseWindow= {CloseWindow}/>)
        }else if(element === "sleep"){
            return setMenu(<Sleep setProps = {setProps} currentSleep = {PetHub.sleep} setPet= {Emotions} CloseWindow= {CloseWindow}/>)
        }else if(element === "play"){
            return setMenu(<Game Balance = {Balance} setBalances = {BalanceAdd} CloseWindow= {CloseWindow}/>)
        }else if(element === "health"){
            return setMenu(<Health setProps = {setProps} product = {Product} setProd = {setProd} CloseWindow= {CloseWindow}/>)
        }else if(element === "store"){
            return setMenu(<Store Balance={Balance} setProductes = {setProductes} product = {Product} CloseWindow= {CloseWindow}/>)
        }else if(element === "settings"){
            return setMenu(<Settings CloseWindow= {CloseWindow}/>)
        }
        
        
    }
    const Emotions = (value:boolean) => {
        console.log(value)
        setStatus(value)
    }

    return(
        <div className='petts'>
            <div className='Coolpac'></div>
            <div className='CoolpacTwo'></div>
            <div className='Pogoda'> 
                    <Pogoda />
            </div>
            <div> {Menu} </div>
            <div className='PetWindow'>
            <HudBar PetHud = {PetHub}/> 
                <div className='moon'></div>
                <div className="PetAndMessage">
                    <div className={Emotion}>
                        <Pet Play = {Ping.Play} Sleep= {Ping.Sleep} Status={Status} />
                        {Status ? <div></div>: <MessagePet petHub = {PetHub}/> }
                    </div>
                    
                    <div className='Floor'></div>
                </div>    
                
            </div>
            <div>
                <Action setProps = {ChooseMenu}/>
            </div>
            
        </div>
    )
}


export default PetGame;
