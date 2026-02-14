import { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "350px",
};

function Mapa({ lat, lng, nombre_sucursal }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [ubicacion, setUbicacion] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    );
  }, []);

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  const destino = { lat, lng };

  return (
    <div>
      <h3>{nombre_sucursal}</h3>

      {ubicacion && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={ubicacion}
          zoom={12}
        >
          {/* Ruta */}
          {!directions && (
            <DirectionsService
              options={{
                origin: ubicacion,
                destination: destino,
                travelMode: "DRIVING",
              }}
              callback={(result) => {
                if (result && result.status === "OK") {
                  setDirections(result);
                }
              }}
            />
          )}

          {directions && (
            <DirectionsRenderer
              options={{
                directions: directions,
                polylineOptions: {
                  strokeColor: "#ff0000",
                  strokeWeight: 5,
                },
              }}
            />
          )}

          {/* Marcadores */}
          <Marker position={ubicacion} />
          <Marker position={destino} />
        </GoogleMap>
      )}
    </div>
  );
}

export default Mapa;
