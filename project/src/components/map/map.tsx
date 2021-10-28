import React from 'react';
import leaflet from 'leaflet';

import useMap from '../../hooks/use-map';
import { DEFAULT_MARKER_URL, SELECTED_MARKER_URL } from '../../const';
import { MapCity } from '../../types/map';
import { OfferInfo } from '../../types/offer';

import 'leaflet/dist/leaflet.css';

const MAP_PANNING_ANIMATION_DURATION = 1.8;

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

type MapProps = {
  className: string;
  selectedPointId: number | null;
  city: MapCity;
  points: OfferInfo[] | null;
};

function Map(props: MapProps): JSX.Element {
  const { city, points, selectedPointId, className } = props;

  const mapRef = React.useRef(null);
  const map = useMap(mapRef, city);
  const markersLayer = new leaflet.LayerGroup();

  React.useEffect(() => {
    if (map) {
      const cityLat = city.location.latitude;
      const cityLng = city.location.longitude;
      const cityZoom = city.location.zoom;

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

      if (city) {
        map.flyTo([cityLat, cityLng], cityZoom, {
          animate: true,
          duration: MAP_PANNING_ANIMATION_DURATION,
        });
      }
    }

    return () => {
      markersLayer.clearLayers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, points, selectedPointId, city]);

  return <section className={`${className} map`} ref={mapRef} />;
}

export default Map;
