import React  from 'react';
import "../css/Action.css"
import { FaBowlFood } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { FaStoreAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";


interface ActionProps {
    setProps: (element:string) => void;
}

const  Action: React.FC<ActionProps> = ({ setProps }) =>{
    
    return(
        <div >
           <div className='ActionBlock'>
            <button className='BlockButtAction' onClick={() => setProps("eat")}><FaBowlFood className='Avatars'/></button>
            <button className='BlockButtAction' onClick={() => setProps("sleep")}><GiNightSleep className='Avatars'/></button>
            <button className='BlockButtAction' onClick={() => setProps("play")}><IoGameController className='Avatars'/></button>
            <button className='BlockButtAction' onClick={() => setProps("health")}><GiHealthNormal className='Avatars'/></button>
            <button className='BlockButtAction' onClick={() => setProps("store")}><FaStoreAlt className='Avatars'/></button>
            <button className='BlockButtAction' onClick={() => setProps("settings")}><IoIosSettings  className='Avatars'/></button>
           </div> 
        </div>
    )
}

export default Action;