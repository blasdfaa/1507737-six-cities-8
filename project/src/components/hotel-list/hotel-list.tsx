import React from 'react';

import { HotelCardVariant } from '../../const';
import OfferCardCities from '../hotel-card/hotel-card-cities';
import OfferCardFavorite from '../hotel-card/hotel-card-favorite';
import OfferCardNear from '../hotel-card/hotel-card-near';
import HotelCard from '../hotel-card/hotel-card';
import { HotelInfo } from '../../types/hotel';

type HotelListProps = {
  listClassName: string;
  handleSelectCard?: (obj: HotelInfo) => void;
  items: HotelInfo[] | null;
  type: string;
};

function HotelList(props: HotelListProps): JSX.Element {
  const { type, items, handleSelectCard, listClassName } = props;

  const getComponentByType = (cardType: string, item: HotelInfo): JSX.Element => {
    switch (cardType) {
      case HotelCardVariant.Cities:
        return (
          <OfferCardCities hotel={item} onHoverCard={() => handleSelectCard && handleSelectCard(item)} />
        );
      case HotelCardVariant.Favorite:
        return <OfferCardFavorite hotel={item} />;
      case HotelCardVariant.Near:
        return <OfferCardNear hotel={item} />;
      default:
        return <HotelCard hotel={item} />;
    }
  };

  return (
    <div className={listClassName}>
      {items &&
        items.map((hotel) => (
          <React.Fragment key={hotel.id}>{getComponentByType(type, hotel)}</React.Fragment>
        ))}
    </div>
  );
}

export default HotelList;
