import React from 'react';
import leaflet from 'leaflet';

import useMap from '../../hooks/use-map';
import { IOfferFull } from '../../types/offer';
import { ICity } from '../../types/map';

import { DEFAULT_MARKER_URL, SELECTED_MARKER_URL } from '../../const';

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
  points: IOfferFull[];
}

function Map(props: IMapProps): JSX.Element {
  const { city, points, selectedPointId, className } = props;

  const mapRef = React.useRef(null);
  const map = useMap(mapRef, city);

  React.useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPointId !== null && point.id === selectedPointId
              ? selectedCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPointId]);

  return <section className={`${className} map`} ref={mapRef} />;
}

export default Map;
