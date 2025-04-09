import React, { useEffect, useState } from "react";

interface Back {
    BackName: string
}

const Japan = () => {
    return (
        <div>
            
            <div className="Sky"></div>
            <div >
                <div><div className="triangle"></div></div>
                <div><div className="triangle2"></div></div>
                <div><div className="triangle3"></div></div>
                <div className="Mount"></div>
            </div>
            <div className="SakuraBlock">
                <div className="SakrTwo"></div>
                <div className="SakrOne"></div>
                <div className="SakrGround"></div>    
            </div>
            <div className="SakuraBack">
                <div className="SakuraTree">
                    <div className="SakuraSmallLetterOne"></div>
                    <div className="SakuraSmallLetterTwo"></div>
                    <div className="SakuraSmallLetterThree"></div>
                    <div className="SakuraSmallLetterFour"></div>
                </div>
                <div className="SakuraLetter"></div>
                <div className="SakuraGround"></div>
            </div>
            <div className="Cloud-container">
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
                <div className="Cloud"></div>
            </div>
        </div>
    )
}
const City = () => {
    return (
        <div>
            <div className="SkyCity"></div>
            <div className="HouseThree">
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
            </div>
            <div className="HouseTwo">
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
            </div>
            <div className="HouseOne">
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OffWindow"></div>
                <div className="OnWindow"></div>
            </div>
            <div className="lite"></div>
            <div className="Vuviska">
                <div className="BlockText">
                    <h3 className="Text">CASINO</h3>
                </div>
            </div>
            
        </div>
        
    )
}


const BackGround: React.FC<Back> = ({BackName}) => {
const [Meesto,setMesto] = useState(Japan())
useEffect(()=>{
    if(BackName === 'Japan'){
        setMesto(Japan())
    }else if(BackName === 'City'){
        setMesto(City())
    }
},[BackName])
    return (
        <div>
            {Meesto}
        </div>
    )
}

export default BackGround;