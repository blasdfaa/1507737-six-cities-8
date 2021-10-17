import React from 'react';

import { IOfferCard, IOfferFull } from '../../types/offer';
import SortPopup from '../sort-popup';
import OfferList from '../offer-list';

interface IOfferSectionProps {
  handleSelectCard: (obj: IOfferCard) => void;
  sortOptions: string[];
  items: IOfferFull[];
}

function OfferSection(props: IOfferSectionProps): JSX.Element {
  const { sortOptions, items, handleSelectCard } = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{items.length} places to stay in Amsterdam</b>
      <SortPopup popupOptions={sortOptions} />
      <OfferList
        items={items}
        type="cities"
        handleSelectCard={handleSelectCard}
        listClassName="cities__places-list places__list tabs__content"
      />
    </section>
  );
}

export default OfferSection;
