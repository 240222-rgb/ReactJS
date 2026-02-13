import { useEffect, useState } from 'react';
import { GoogleMap,LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '350px'
};

function MapaGeolocalizacion (){
    const [ubicacion, setUbicacion] = useState(null);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },
            (error)=> console.error(error),
            {enableHighAccuracy:true}
        )
    },[])

    return(
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            {
                ubicacion && (
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={ubicacion}
                    zoom={15}>
                        <Marker position={ubicacion}/>
                    </GoogleMap>
                )
            }
        </LoadScript>
    )
}
export default MapaGeolocalizacion

/*
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })

    if(loadError) return <div>Error al cargar el mapa</div>
    if(!isLoaded) return <div>Cargando mapa...</div>

    const center = { lat, lng }
    return (
        <div>
            <h2>{nombre_sucursal}</h2>
            <GoogleMap 
            mapContainerStyle={containerStyle}
            center = {center}
            zoom = {16}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}*/

