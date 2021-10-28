import React from 'react';

import { OfferCardInfo } from '../../types/offer';
import { OfferCardVariant } from '../../const';
import OfferCardCities from '../offer-card/offer-card-cities';
import OfferCardFavorite from '../offer-card/offer-card-favorite';
import OfferCardNear from '../offer-card/offer-card-near';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  listClassName: string;
  handleSelectCard?: (obj: OfferCardInfo) => void;
  items: OfferCardInfo[] | null;
  type: string;
};

function OfferList(props: OfferListProps): JSX.Element {
  const { type, items, handleSelectCard, listClassName } = props;

  const getComponentByType = (cardType: string, item: OfferCardInfo): JSX.Element => {
    switch (cardType) {
      case OfferCardVariant.Cities:
        return (
          <OfferCardCities offer={item} onHoverCard={() => handleSelectCard && handleSelectCard(item)} />
        );
      case OfferCardVariant.Favorite:
        return <OfferCardFavorite offer={item} />;
      case OfferCardVariant.Near:
        return <OfferCardNear offer={item} />;
      default:
        return <OfferCard offer={item} />;
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
