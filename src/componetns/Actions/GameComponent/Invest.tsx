import React, { useState } from "react";
import "../../../css/Game.css"
import { FaStoreAlt } from "react-icons/fa";
import { MdOutlineLocalConvenienceStore } from "react-icons/md";
import { FaOilWell } from "react-icons/fa6";
import { GiNuclearPlant } from "react-icons/gi";

interface Busine {
    Market: number
    Small: number
    Pump: number
    Plant: number
}
interface Props{
    setBusin: (element: keyof Busine,value: number) => void;
    Balanc: number
    CashHour: number
    Businer: Busine
}

const Invest: React.FC<Props> = ({setBusin , Balanc ,CashHour,Businer }) => {
    return(
        <div>
            <div className="GameBlock">
                <div className="Balance">
                    <div>Cash : {Balanc}</div>
                    <div>Cash in hour : {CashHour}</div>
                </div>
                <div>
                    <div className="InvestMenu">
                        <h4 className="InvetName"><FaStoreAlt className="InvestIcons"/> Market </h4>
                        <div className="InvestHave">You have : {Businer.Market}</div>
                        <button className="InvestBut" onClick={()=>setBusin("Market" , 1)}>Купити</button>
                    </div>
                    <div className="InvestMenu">
                        <h4 className="InvetName"><MdOutlineLocalConvenienceStore className="InvestIcons"/> Small business </h4>
                        <div className="InvestHave">You have : {Businer.Small}</div>
                        <button className="InvestBut" onClick={()=>setBusin("Small" , 1)} >Купити</button>
                    </div>
                    <div className="InvestMenu">
                        <h4 className="InvetName"><FaOilWell className="InvestIcons"/> Oil pumping </h4>
                        <div className="InvestHave">You have : {Businer.Pump} </div>
                        <button className="InvestBut" onClick={()=>setBusin("Pump" , 1)}>Купити</button>
                    </div>
                    <div className="InvestMenu">
                        <h4 className="InvetName"><GiNuclearPlant className="InvestIcons"/> Nuclear plant </h4>
                        <div className="InvestHave">You have : {Businer.Plant}</div>
                        <button className="InvestBut" onClick={()=>setBusin("Plant" , 1)}>Купити</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div> 
    )
}

export default Invest