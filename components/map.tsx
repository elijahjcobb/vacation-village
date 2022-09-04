import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LOCATION = { lat: 44.900915, lng: -85.394782 }
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;


export function VacationVillageMap() {
	return <Map
		initialViewState={{
			latitude: LOCATION.lat,
			longitude: LOCATION.lng,
			zoom: 6
		}}
		style={{ width: "100%", height: "40vh" }}
		mapStyle="mapbox://styles/mapbox/streets-v9"
		mapboxAccessToken={MAPBOX_TOKEN}
	>
		<Marker longitude={LOCATION.lng} latitude={LOCATION.lat} color="red" />
	</Map>
}