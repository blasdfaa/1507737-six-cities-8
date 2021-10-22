import { OfferCardType, OfferFullType } from '../../types/offer';
import SortPopup from '../sort-popup/sort-popup';
import OfferList from '../offer-list/offer-list';
import React from 'react';

type OfferSectionProps = {
  currentCategory: string;
  handleSelectCard: (obj: OfferCardType) => void;
  sortOptions: string[];
  items: OfferFullType[] | [];
};

function OfferSection(props: OfferSectionProps): JSX.Element {
  const { sortOptions, items, handleSelectCard, currentCategory } = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {items && items.length} places to stay in {currentCategory}
      </b>
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
