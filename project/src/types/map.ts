export type PointType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityType = {
  location: PointType;
  name: string;
};
