import React, { useEffect, useState } from "react";
import "../css/Message.css"
interface PetHub {
    eat: number;
    sleep: number;
    play: number;
    health: number;
    store: number;
}
interface Message {
    Food: [string,string,string,string,string];
    Sleep: [string,string,string];
    Play: [string,string,string,string];
    Health: [string,string,string]
}

const MessagePet: React.FC<{ petHub: PetHub }> = ({ petHub }) => {
    const [VueMes, setVueMes] = useState<string | undefined>('')
    const [Message ] = useState<Message>({
        Food: ["Я проголодався" , "ХОЧУ ЇСТИ!!","Нагодуй мене)","Я хочу Салат)","Знайди щось їсти!"],
        Sleep: ["Я хочу спати" , "Вклади мене спати)","Скажи вже на добраніч"],
        Play: ["Давай пограємо!","Мені скучно ,давай в гру!", "Давай поклікаєм", "Пішли повеселимся!"],
        Health: ["Я хворію","Дай пігулку!","37.7 ще трохи і я помру :/"]
    })
    const Problems =() => {
        if(petHub.eat < 50){
            let RandomNumber = Math.floor(Math.random() * 5);
            return Message.Food[RandomNumber]
        }else if(petHub.sleep < 20){
            let RandomNumber = Math.floor(Math.random() * 5);
            return Message.Sleep[RandomNumber]
        }
        else if(petHub.play < 40){
            let RandomNumber = Math.floor(Math.random() * 5);
            return Message.Play[RandomNumber]
        }else if(petHub.health < 50){
            let RandomNumber = Math.floor(Math.random() * 5);
            return Message.Health[RandomNumber]
        }
    }
    useEffect(()=>{
        const Messs: string | undefined = Problems()
        setVueMes(Messs)
    },[petHub])
    return (
        <div>
            {Problems() !== undefined || null ? 
            <div className="Messages">
                {VueMes}
            </div> 
            :
            <div></div>
            }
        </div>
    )
}

export default MessagePet;