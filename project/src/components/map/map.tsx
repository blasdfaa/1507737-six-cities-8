import React from 'react';
import leaflet from 'leaflet';

import useMap from '../../hooks/use-map';
import { DEFAULT_MARKER_URL, SELECTED_MARKER_URL } from '../../const';
import { ICity } from '../../types/map';
import { IOfferFull } from '../../types/offer';

import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = leaflet.icon({
  iconUrl: DEFAULT_MARKER_URL,
  iconSize: [27, 39],
  iconAnchor: [19.5, 27],
});

const selectedCustomIcon = leaflet.icon({
  iconUrl: SELECTED_MARKER_URL,
  iconSize: [27, 39],
  iconAnchor: [19.5, 27],
});

interface IMapProps {
  className: string;
  selectedPointId: number | null;
  city: ICity;
  points: IOfferFull[] | null;
}

function Map(props: IMapProps): JSX.Element {
  const { city, points, selectedPointId, className } = props;

  const mapRef = React.useRef(null);
  const map = useMap(mapRef, city);

  React.useEffect(() => {
    const markersLayer = new leaflet.LayerGroup();

    if (map) {
      markersLayer.clearLayers();

      points &&
        points.forEach((point) => {
          const marker = leaflet.marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          });

          marker.setIcon(
            selectedPointId !== null && point.id === selectedPointId ? selectedCustomIcon : defaultCustomIcon,
          );

          markersLayer.addLayer(marker);
        });

      markersLayer.addTo(map);
    }
  }, [map, points, selectedPointId, city]);

  return <section className={`${className} map`} ref={mapRef} />;
}

export default Map;
