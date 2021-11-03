import React from 'react';
import leaflet from 'leaflet';

import { LocationCity } from '../types/hotel';

function useMap(
  mapRef: React.RefObject<HTMLElement | null>,
  city: LocationCity | null,
  scrolling: boolean | undefined,
): leaflet.Map | null {
  const [map, setMap] = React.useState<leaflet.Map | null>(null);

  React.useEffect(() => {
    if (mapRef.current !== null && city !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
        scrollWheelZoom: !scrolling,
      });

      const layer = leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, mapRef, city]);

  return map;
}

export default useMap;
