import React from "react";
import '../../css/Settings.css'
import { IoMdClose } from "react-icons/io";

interface Close {
    CloseWindow: () => void;
}
const Settings: React.FC<Close> = ({CloseWindow}) => {
    const User = localStorage.getItem("PetName")

    const LogOut = () =>{
        localStorage.removeItem("Authorization");
        localStorage.removeItem("PetName");
        window.location.reload();
    }
    
    return (
        <div className="SettingWindow">
            <div className="SettingsText">
                <div className="Menu">Setting <button className="Close" onClick={()=> CloseWindow()}><IoMdClose className="CloseAvatar"/></button></div>
                <h1></h1>
                <h3>Нікнейм : {User}</h3>
                <button onClick={()=>LogOut()} className="Logout">Logout</button>
            </div>
        </div>
     )
}

export default Settings;