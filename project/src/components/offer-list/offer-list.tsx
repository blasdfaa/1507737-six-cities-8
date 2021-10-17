import React from 'react';

import { IOfferCard } from '../../types/offer';
import { OfferCardType } from '../../const';
import { OfferCard, OfferCardCities, OfferCardFavorite, OfferCardNear } from '../offer-card';

interface IOfferListProps {
  listClassName: string;
  handleSelectCard?: (obj: IOfferCard) => void;
  items: IOfferCard[];
  type: string;
}

function OfferList(props: IOfferListProps): JSX.Element {
  const { type, items, handleSelectCard, listClassName } = props;

  const getComponentByType = (cardType: string, item: IOfferCard): JSX.Element => {
    switch (cardType) {
      case OfferCardType.Cities:
        return (
          <OfferCardCities
            offer={item}
            onHoverCard={() => handleSelectCard && handleSelectCard(item)}
          />
        );
      case OfferCardType.Favorite:
        return (
          <OfferCardFavorite
            offer={item}
          />
        );
      case OfferCardType.Near:
        return (
          <OfferCardNear
            offer={item}
          />
        );
      default:
        return (
          <OfferCard
            offer={item}
          />
        );
    }
  };

  return (
    <div className={listClassName}>
      {items &&
      items.map((offer) => (
        <React.Fragment key={offer.id}>{getComponentByType(type, offer)}</React.Fragment>
      ))}
    </div>
  );
}

export default OfferList;
