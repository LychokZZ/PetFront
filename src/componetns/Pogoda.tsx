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
const [city, setCity] = useState<string | null>(null);
const [error, setError] = useState<string | null>(null);
const [Weather, setWeather] = useState<React.ReactNode>(null)
const API_KEY = "100514ab4cff4765be0129b8795e8e20";
const [DataWeather ,setDataWeather] = useState<InterWeather>({
    
    temp_c: 0,
    cloud: 0,
    wind_kph: 0,
    precip_mm: 0,
    lastUpdated: "0000-00-00 00:00",

})
const ChooseWeather = () => {
    const date = new Date(DataWeather.lastUpdated);
    const hour = date.getHours();

    if (DataWeather.temp_c >= 10 && DataWeather.cloud < 50 && hour >= 7 && hour <= 17) {
        setWeather(Sunny());
    }else if(DataWeather.temp_c <15 && DataWeather.cloud > 60 &&  DataWeather.wind_kph >= 12){
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
    }else setWeather(Sunny());
}


const getCityFromCoords = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=${latitude}+${longitude}&language=en`
      );
      const data = await response.json();
      return (
        data.results[0]?.components.city ||
        data.results[0]?.components.town ||
        data.results[0]?.components.village ||
        "Місто не знайдено"
      );
    } catch (error) {
      console.error("Помилка при отриманні міста:", error);
      return "Помилка";
    }
}

useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Геолокація не підтримується в цьому браузері");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const cityName = await getCityFromCoords(latitude, longitude);
        setCity(cityName);
      },
      (error) => console.error("Помилка отримання геолокації:", error),
      { enableHighAccuracy: true }
    );
  }, []);
useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=1e1ead12e2ee4221b30172403252503&q=${city}`
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
  }, [city]);

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