import React from 'react';
import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import type { Dispatch } from 'redux';

import { OfferCardType, OfferFullType } from '../../types/offer';
import Tabs from '../../components/tabs/tabs';
import Map from '../../components/map/map';
import { StateType } from '../../types/state';
import { categoryNames } from '../../const';
import { ActionTypes } from '../../types/action';
import { setCategoryAction } from '../../redux/actions/category';
import OfferList from '../../components/offer-list/offer-list';
import SortPopup from '../../components/sort-popup/sort-popup';
import { sortCardsByType } from '../../utils/sort-cards-by-type';

const mapStateToProps = ({ offers, category }: StateType) => ({
  offerItems: offers.items,
  isLoading: offers.isLoading,
  error: offers.error,
  sortType: offers.sortBy,
  currentCategory: category,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  setCategory(category: string) {
    dispatch(setCategoryAction(category));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type HomePageProps = ConnectedProps<typeof connector> & {
  sortOptions: string[];
};

function HomePage(props: HomePageProps): JSX.Element {
  const { sortOptions = [], offerItems = [], isLoading, currentCategory, setCategory, sortType } = props;

  const [selectedCard, setSelectedCard] = React.useState<OfferCardType | null>(null);
  const [cards, setCards] = React.useState<OfferFullType[] | []>([]);

  const filteredItems = offerItems?.filter((offer) => offer?.city?.name === currentCategory);

  React.useEffect(() => {
    setCards(filteredItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerItems, currentCategory]);

  React.useEffect(() => {
    const sortedItems = sortCardsByType(sortType, filteredItems);

    setCards(sortedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  const handleChangeCategory = (category: string) => {
    setCategory(category);
  };

  const handleSelectCard = (obj: OfferCardType): void => {
    setSelectedCard(obj);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs items={categoryNames} currentCategory={currentCategory} onTabClick={handleChangeCategory} />
      <div className="cities">
        {!isLoading && (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cards && cards.length} places to stay in {currentCategory}
              </b>
              <SortPopup popupOptions={sortOptions} />
              <OfferList
                items={cards}
                type="cities"
                handleSelectCard={handleSelectCard}
                listClassName="cities__places-list places__list tabs__content"
              />
            </section>
            <div className="cities__right-section">
              {cards && (
                <Map
                  className="cities__map"
                  city={cards[0]?.city}
                  points={cards}
                  selectedPointId={selectedCard && selectedCard.id}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default connector(HomePage);
