import React, { useEffect, useState } from "react";
import '../css/Auth.css'

const Auth =() => {
    const [Up, setUp] = useState('')
    const [Vue ,setVue] = useState(true)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const Registrations = () => {
        console.log(username,password)
        fetch('http://localhost:5001/auth/registration', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        localStorage.setItem("Authorization" , 'true')
        localStorage.setItem("PetName" , username)
        window.location.reload();
    }
    const Login = () => {
        console.log(username,password)
        fetch('http://localhost:5001/auth/registration', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        localStorage.setItem("Authorization" , 'true')
        localStorage.setItem("PetName" , username)
        window.location.reload();
    }


    useEffect(()=>{
        setUp('Up')
        
    },[])

    
    return(
        <div className="OverHiden">
            <h1 className="MyPet">MY PET</h1>
            <div className="background"></div>
            <div className="backgroundTwo"></div>
            <div className="CentralWindow">
                <div className="LoginResponse">
                    {Vue ?
                        <div className="LoginWindow">
                            <div className="HederLogin">
                                <h1>Login</h1>
                                <button onClick={() => setVue(false)} className="ToSwith">До реєстрації</button>
                            </div>
                            <input className="Input" placeholder="Никнейм" onChange={(e)=>setUsername(e.target.value)}></input>
                            <input className="Input" placeholder="Пароль" onChange={(e)=>setPassword(e.target.value)}></input>
                            <button  onClick={(e)=> Login()} className="ButReg">Увійти</button>
                        </div> 
                    :
                        <div className="LoginWindow">
                            <div className="HederLogin">
                                <h1>Register</h1>
                                <button onClick={() => setVue(true)} className="ToSwithReg">До Логіну</button>
                            </div>
                            <input className="Input" placeholder="Никнейм" onChange={(e)=>setUsername(e.target.value)}></input>
                            <input type="password" className="Input" placeholder="Пароль"  onChange={(e)=>setPassword(e.target.value)}></input>
                            <button onClick={(e)=> Registrations()} className="ButReg">Зареєструватись</button>
                        </div>
                    }
                    <div className="PetAndFloor">
                        <div className={Up}><img className='StylePetLogin' src={"Animals/pngwing.png"} alt="Miha" /></div>
                        <div className="Floors"></div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Auth