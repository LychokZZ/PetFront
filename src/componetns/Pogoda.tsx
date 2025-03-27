import React, { useEffect, useState } from "react";
import '../css/Pogoda.css'

interface InterWeather {
    temp_c: number;
    cloud: number;
    wind_kph: number;
    precip_mm: number;
    lastUpdated: string;
}

const SmallRain = () => {
    return (
        <div>
            <div className="Cloud"></div>
            <div className="rain-container">
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
            </div>
        </div>
    )
}

const BigRain = () => {
    return (
        <div>
            <div className="Cloud"></div>
            <div className="rain-container">
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
                <div className="raindrop"></div>
            </div>
        </div>
    )
}
const Sunny = () => {
    return(
        <div>
            <div className="Day">
                <div className="Sun"></div>
                <div className="More"></div>
            </div>     
        </div>
    )
}
const ColdDay = () => {
        return(
            <div>
                <div className="Cold">
                    <div className="vinter-container">
                        <div className="vintervuuu"></div>
                        <div className="vintervuuu"></div>
                        <div className="vintervuuu"></div>
                        <div className="vintervuuu"></div>
                        <div className="vintervuuu"></div>
                        <div className="vintervuuu"></div>
                        <div className="vintervuuu"></div>
                    </div>
                </div>
            </div>
        )
}
const MoonNight = () => {

    return (
        <div>
            <div className="Night">
                <div className="Moon">
                    <div className="Moon-circule1"></div>
                    <div className="Moon-circule2"></div>
                    <div className="Moon-circule3"></div>
                </div>
            </div>
        </div>
    )
}
const SunnNot = () =>{
    return(
        <div>
            <div className="ColdSun">
                <div className="ColdSunyy"></div>
            </div>
        </div>
    )
}

const GreyNight = () => {

    return (
        <div>
            <div className="GreyNight">
                <div className="Moon">
                    <div className="Moon-circule1"></div>
                    <div className="Moon-circule2"></div>
                    <div className="Moon-circule3"></div>
                </div>
            </div>
        </div>
    )
}


const Pogoda = () => {
const [Weather, setWeather] = useState<React.ReactNode>(null)
const [DataWeather ,setDataWeather] = useState<InterWeather>({
    temp_c: 0,
    cloud: 0,
    wind_kph: 0,
    precip_mm: 0,
    lastUpdated: "0000-00-00 00:00",

})
const ChooseWeather = () => {
    console.log(DataWeather)
    const date = new Date(DataWeather.lastUpdated);
    const hour = date.getHours();

    if (DataWeather.temp_c >= 16 && DataWeather.cloud < 50 && hour >= 7 && hour <= 17) {
        setWeather(Sunny());
    }else if(DataWeather.temp_c <15 && DataWeather.cloud > 50 &&  DataWeather.wind_kph >= 12){
        setWeather(ColdDay())
    }else if(DataWeather.cloud > 50 &&  DataWeather.precip_mm >= 0.2 && DataWeather.precip_mm < 0.7){
        setWeather(SmallRain())
    }else if(DataWeather.cloud > 50 &&  DataWeather.precip_mm >= 0.7) {
        setWeather(BigRain())
    }else if ((hour >= 18 || hour < 6) && DataWeather.cloud < 80) {
        setWeather(MoonNight());
    }else if ((hour >= 18 || hour < 6) && DataWeather.cloud >= 80) {
        setWeather(GreyNight());
    }else if( DataWeather.temp_c >14 && DataWeather.cloud > 50 && DataWeather.wind_kph <= 12 && hour >= 7 && hour <= 17){
        setWeather(SunnNot());
    }
    
}

useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.weatherapi.com/v1/current.json?key=1e1ead12e2ee4221b30172403252503&q=Chernivtsi"
        );
        const data = await response.json();
        setDataWeather({
            temp_c: data.current.temp_c ,
            cloud: data.current.cloud,
            wind_kph: data.current.wind_kph ,
            precip_mm: data.current.precip_mm,
            lastUpdated: data.current.last_updated,
        })
      } catch (error) {
        console.error("Помилка при отриманні погоди:", error);
      }
    };

    fetchWeather();
  }, []);

  useEffect(()=>{
    ChooseWeather()
  },[DataWeather])

    return (
        <div>
            {Weather}
        </div>
    )

}

export default Pogoda;