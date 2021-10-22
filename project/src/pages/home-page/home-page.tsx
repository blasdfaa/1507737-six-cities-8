import React from 'react';
import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import type { Dispatch } from 'redux';

import { OfferCardType, OfferFullType } from '../../types/offer';
import Tabs from '../../components/tabs/tabs';
import OfferSection from '../../components/offer-section/offer-section';
import Map from '../../components/map/map';
import { StateType } from '../../types/state';
import { categoryNames, SortOptions } from '../../const';
import { ActionTypes } from '../../types/action';
import { setCategoryAction } from '../../redux/actions/category';

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

  const defaultCards = offerItems?.filter((offer) => offer?.city?.name === currentCategory);

  React.useEffect(() => {
    setCards(defaultCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerItems, currentCategory]);

  const handleSortCards = (currentSortType: string) => {
    switch (currentSortType) {
      case SortOptions.ByPopular: {
        setCards(defaultCards);
        break;
      }
      case SortOptions.ByPriceToHight: {
        const sorted = [...cards].sort((a, b) => a.price - b.price);

        setCards(sorted);
        break;
      }
      case SortOptions.ByPriceToLow: {
        const sorted = [...cards].sort((a, b) => b.price - a.price);

        setCards(sorted);
        break;
      }
      case SortOptions.ByRating: {
        const sorted = [...cards].sort((a, b) => b.rating - a.rating);

        setCards(sorted);
        break;
      }
      default:
        setCards(defaultCards);
        break;
    }
  };

  React.useEffect(() => {
    handleSortCards(sortType);
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
            <OfferSection
              sortOptions={sortOptions}
              items={cards}
              handleSelectCard={handleSelectCard}
              currentCategory={currentCategory}
            />
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
