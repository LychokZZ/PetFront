import React, { useEffect, useState } from "react";

interface Back {
    BackName: string
    Style: string | null
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

const Train = () => {

    return (
        <div>
            <div className="SkyTrain"></div>
            <div className="TrainRoad">
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
                    <div className="wall">
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                        <div className="Brick"></div>
                    </div>
            </div>
            <div className="TrainChuh">
                <div className="Iron"></div>
                <div className="Iron"></div>
                <div className="Iron"></div>
                <div className="Iron"></div>
                <div className="Iron"></div>
                <div className="Iron"></div>
                <div className="Iron"></div>
                <div className="Iron"></div>
                <div className="Iron"></div>
                <div className="Iron"></div>
            </div>
            <div className="AnimationTrain">
                <div className="Connnect"></div>
                <div className="Connnect"></div>
                <div className="Connnect"></div>
                <div className="Connnect"></div>
                <div className="TrainVagon">
                    <div className="Base">
                        <div className="ironline"></div>
                    </div>
                </div>
                <div className="TrainiPass">
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="ironlinepass"></div>
                </div>
                <div className="TrainiPass">
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="ironlinepass"></div>
                </div>
                <div className="TrainiPass">
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="TrainWindow"></div>
                    <div className="ironlinepass"></div>
                </div>
               
            </div>
            <div className="outTrain"></div>
            <div className="Ground">
                <div className="GreenTree">
                    <div className="TreeWood"></div>
                    <div className="GrenLessOne"></div>
                    <div className="GrenLessTwo"></div>
                    <div className="GrenLessFour"></div>
                    <div className="GrenLessThree"></div>
                </div>
                <div className="GreenTreeTwo">
                    <div className="TreeWood"></div>
                    <div className="GrenLessOne"></div>
                    <div className="GrenLessTwo"></div>
                    <div className="GrenLessFour"></div>
                    <div className="GrenLessThree"></div>
                </div>
                <div className="MountOne"></div>
                <div className="MountThree"></div>
                <div className="MountTwo"></div>
                
            </div>
        </div>
    )
}
const Def =() =>{
    return (
        <span>

        </span>
    )
}


const BackGround: React.FC<Back> = ({BackName , Style}) => {
const [Meesto,setMesto] = useState(Def())
useEffect(()=>{
    if(BackName === 'Japan'){
        setMesto(Japan())
    }else if(BackName === 'City'){
        setMesto(City())
    }else if(BackName === 'Train'){
        setMesto(Train())
    }else if(BackName === 'Def'){
        setMesto(Def())
    }
},[BackName])
useEffect(()=>{
    console.log(Style)
    if(Style === 'Japan'){
        setMesto(Japan())
    }else if(Style === 'City'){
        setMesto(City())
    }else if(Style === 'Train'){
        setMesto(Train())
    }else if(Style === ''){
        setMesto(Def())
    }
},[Style])
    return (
        <div className="blur">
            {Meesto}
        </div>
    )
}

export default BackGround;