import { MapContainer, TileLayer, Marker } from 'react-leaflet' /* contenedores con los que trabaja el mapa de leaflet */
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css' /* esta linea hace que no se vea como un rompecabezas roto */
import '../styles/MapComponent.css'

/* marcador personalizado para las posiciones de la F1  */
const f1Icon = new Icon({

    /* ruta de la imagen */
    iconUrl: '/flag-f1.png',

    /* tamaño de la imagen [ancho, alto] */
    iconSize: [25, 25],

    /* punto de anclaje del icono [x, y] */
    /* que punto toca la coordenada en la mapa */
    iconAnchor: [15, 30],

    /* punto del pop up */
    /* donde se abre el globo de texto respecto al anclaje */
    popupAnchor: [0,-30]
});

function MapComponent({ circuitsData, onClickMap }){

    /* coordenadas iniciales del mapa mundi */
    const initialCenter = [20.0, 0.0];
    const initialZoom = 2; // alejado para poder visualizar todos los continentes
    
    return(

        <>
            
            <div className='mapWrapper justify-content-center'>
                <MapContainer
                center={initialCenter}
                zoom={initialZoom}
                scrollWheelZoom={false} /* esto evita que el usuario pueda hacer zoom de mas */
                className='leafletMap'>

                    {/* esto es como la piel del mapa */}
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">

                    </TileLayer>

                    {/* estos son los pines con los lugares del mundo, del array de circuitos */}
                    {circuitsData && circuitsData.map((circuit) => (
                        <Marker
                            key={circuit.id}
                            position={circuit.coordinates}
                            icon={f1Icon}
                            /* aqui se conecta el evento del clic en el mapa para mostrar el modal */
                            eventHandlers={{
                                click: () => onClickMap(circuit),
                            }}>
                            
                        </Marker>
                    ))}

                
                </MapContainer>
            </div>

        </>
    )
}

export default MapComponent