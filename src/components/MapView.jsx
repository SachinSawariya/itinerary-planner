import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import itineraryData from '../data/mockData';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapView = () => {
  const getZoomLevel = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 10 : 11;
    }
    return 11;
  };

  return (
    <div className="relative h-full w-full">
      <div className="md:hidden absolute top-2 left-2 right-2 bg-white bg-opacity-90 z-10 p-2 rounded-md shadow-md text-xs text-center">
        Use two fingers to zoom and pan the map
      </div>
      <MapContainer 
        center={[28.6139, 77.2090]} 
        zoom={getZoomLevel()} 
        className="h-full w-full z-0"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        {itineraryData.map((item) => (
          <Marker key={item.id} position={item.location}>
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-xs">{item.description}</p>
                <p className="text-xs text-yellow-600">⭐ {item.rating}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
