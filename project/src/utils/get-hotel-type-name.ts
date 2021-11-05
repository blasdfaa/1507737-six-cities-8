import { HotelTypeNames } from '../const';

export const getHotelTypeName = (hotelType: string | undefined): string => {
  if (hotelType) {
    switch (hotelType) {
      case HotelTypeNames.Apartment:
        return 'Apartment';
      case HotelTypeNames.PrivateRoom:
        return 'Private Room';
      case HotelTypeNames.House:
        return 'House';
      case HotelTypeNames.Hotel:
        return 'Hotel';
      default:
        return hotelType;
    }
  }

  return 'Unknown type';
};
