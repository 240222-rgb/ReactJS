import { useEffect, useState } from "react";
import "./Clima.css";
function Clima(){
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const lat = 20.240201920581217
    const lng = -97.96284776176103

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(API_KEY);
            setClima(data);
        })
        .catch((error)=> console.error("Error:",error));
    },[])
    return (
        <div classname="divClima">
            {
                
            clima ? (
                    <>
                    <p>{clima.name} Temp: {clima.main.temp} °C | Hum: {clima.main.humidity}</p>
                    <p>Descripcion: {clima.weather.description}</p>
                    </>

                ):(
                    <p>Cargando clima ...</p>
                )
            }
        </div>
    )
}
export default Clima 