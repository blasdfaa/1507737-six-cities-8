import React from 'react';
import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import type { Dispatch } from 'redux';

import { OfferCardInfo, OfferCategory, OfferInfo } from '../../types/offer';
import Tabs from '../../components/tabs/tabs';
import Map from '../../components/map/map';
import { Action } from '../../types/action';
import OfferList from '../../components/offer-list/offer-list';
import SortPopup from '../../components/sort-popup/sort-popup';
import { sortCardsByType } from '../../utils/sort-cards-by-type';
import { setCategoryAction } from '../../redux/actions/offer';
import { GlobalState } from '../../types/state';

const mapStateToProps = ({ offers }: GlobalState) => ({
  offerItems: offers.items,
  isDataLoadded: offers.isOffersLoadded,
  error: offers.error,
  sortType: offers.sortBy,
  currentCategory: offers.selectedCategory,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setCategory(category: OfferCategory) {
    dispatch(setCategoryAction(category));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function HomePage(props: PropsFromRedux): JSX.Element {
  const { offerItems = [], isDataLoadded, currentCategory, setCategory, sortType } = props;

  const [selectedCard, setSelectedCard] = React.useState<OfferCardInfo | null>(null);
  const [cards, setCards] = React.useState<OfferInfo[] | []>([]);

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

  const handleChangeCategory = (category: OfferCategory) => {
    setCategory(category);
  };

  const handleSelectCard = (obj: OfferCardInfo): void => {
    setSelectedCard(obj);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs currentCategory={currentCategory} onTabClick={handleChangeCategory} />
      <div className="cities">
        {isDataLoadded && (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cards && cards.length} places to stay in {currentCategory}
              </b>
              <SortPopup />
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
