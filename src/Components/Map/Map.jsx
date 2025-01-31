import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGeoLocation from "../../../hooks/useGeoLocation";
import useUrlLocation from "../../../hooks/useUrlLocation";

function Map({ markerPositions, isLoadingPositions }) {
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
  const [lat, lng] = useUrlLocation();
  const {
    isLoading: isGeoLoading,
    position: geoPosition,
    error: geoError,
    getPosition,
  } = useGeoLocation();

  useEffect(() => {
    if (lat && lng) {
      setMapCenter([lat, lng]);
    }
  }, [lat, lng]);

  useEffect(() => {
    if (geoPosition.lat && geoPosition.lng) {
      setMapCenter([geoPosition.lat, geoPosition.lng]);
    }
  }, [geoPosition]);

  if (isLoadingPositions) return <Loader />;
  return (
    <div className="mapContainer">
      <MapContainer
        className="map"
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}
      >
        <button onClick={getPosition} className="getLocation">
          {isGeoLoading ? "Loading..." : "Your Location"}
        </button>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={mapCenter} />
        <DetectClick />
        {markerPositions.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>{item.host_location}</Popup>
          </Marker>
        ))}
      </MapContainer>
      ,
    </div>
  );
}

export default Map;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      navigate(`/bookmark/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
  return null;
}
