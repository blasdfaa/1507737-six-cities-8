import React from 'react';
import { IOfferFull } from '../../types/offer';
import OfferCard from '../offer-card';
import SortPopup from '../sort-popup';

interface OfferListProps {
  sortOptions: string[];
  items: IOfferFull[];
}

function OfferList(props: OfferListProps): JSX.Element {
  const { sortOptions, items } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focusedCard, setFocusedCard] = React.useState({});

  const handleHoverCard = (obj: IOfferFull): void => {
    setFocusedCard(obj);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{items.length} places to stay in Amsterdam</b>
      <SortPopup popupOptions={sortOptions} />
      <div className="cities__places-list places__list tabs__content">
        {items.map((offer) => (
          <OfferCard
            {...offer}
            key={offer.id}
            variant="offer"
            handleHoverCard={() => handleHoverCard(offer)}
          />
        ))}
      </div>
    </section>
  );
}

export default OfferList;
