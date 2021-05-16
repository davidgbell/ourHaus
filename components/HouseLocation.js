import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocode from 'react-geocode';
import { useEffect, useState } from 'react';

export const HouseLocation = ({ house }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewPort, setViewPort] = useState({
    latitude: 51.5010102,
    longitude: -0.1415626,
    width: '100%',
    height: '500px',
    zoom: 12,
  });

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY);

  useEffect(() => {
    // Get latitude & longitude from address.
    Geocode.fromAddress(house.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewPort({ ...viewPort, latitude: lat, longitude: lng });
        setLoading(false);
      },
      error => {
        console.error(error);
      }
    );
  }, []);

  if (loading) return false;

  return (
    <div className='map-container'>
      <ReactMapGL
        {...viewPort}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        onViewportChange={vp => setViewPort(vp)}>
        <Marker key={house.id} latitude={lat} longitude={lng}>
          <span aria-label='house emoji' role='img'>
            🏠
          </span>
        </Marker>
      </ReactMapGL>
    </div>
  );
};
