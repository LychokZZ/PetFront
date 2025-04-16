import React, { useState } from "react";
import "../../../css/Game.css"
interface Props{
    Tap: () => void
    Balanc: number
    taps: number
}


const Cliker: React.FC<Props> = ({Tap , Balanc , taps}) =>{
    const [tap,setTaps] = useState<number>(taps)
    
    return (
        <div>
            <div>
                <div className="GameBlock">
                    <div className="Balance">
                        <div>Cash : {Balanc}</div>
                        <div>Tap : {tap}</div>
                    </div>
                    <div>
                        <div className="ClickBut" onClick={()=> Tap()}>
                            <img className='GamePet' src={"Animals/pngwing.png"} alt="Miha" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default Cliker