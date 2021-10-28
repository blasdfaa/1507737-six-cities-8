export type MapPoint = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type MapCity = {
  location: MapPoint;
  name: string;
};
