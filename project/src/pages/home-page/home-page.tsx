import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { ConnectedProps } from 'react-redux';

import { IOfferCard, IOfferFull } from '../../types/offer';
import Tabs from '../../components/tabs/tabs';
import OfferSection from '../../components/offer-section/offer-section';
import Map from '../../components/map/map';
import { IState } from '../../types/state';
import { categoryNames } from '../../const';
import { ActionTypes } from '../../types/action';
import { setCategoryAction } from '../../redux/actions/category';

const mapStateToProps = ({ offers, category }: IState) => ({
  offerItems: offers.items,
  isLoading: offers.isLoading,
  error: offers.error,
  currentCategory: category,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  setCategory(category: string) {
    dispatch(setCategoryAction(category));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IHomePageProps extends PropsFromRedux {
  sortOptions: string[];
}

function HomePage(props: IHomePageProps): JSX.Element {
  const { sortOptions = [], offerItems = [], isLoading, currentCategory, setCategory } = props;

  const [selectedCard, setSelectedCard] = React.useState<IOfferCard | null>(null);
  const [cards, setCards] = React.useState<IOfferFull[] | null>(null);

  React.useEffect(() => {
    const filtredCards = offerItems?.filter((offer) => offer?.city?.name === currentCategory);

    setCards(filtredCards);
  }, [offerItems, currentCategory]);

  const handleChangeCategory = (category: string) => {
    setCategory(category);
  };

  const handleSelectCard = (obj: IOfferCard): void => {
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
