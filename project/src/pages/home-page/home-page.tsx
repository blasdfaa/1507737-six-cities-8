import React from 'react';

import { IOfferCard, IOfferFull } from '../../types/offer';
import Tabs from '../../components/tabs/tabs';
import OfferSection from '../../components/offer-section/offer-section';
import Map from '../../components/map/map';

interface IHomePageProps {
  cities: string[];
  sortOptions: string[];
  offerItems: IOfferFull[];
}

function HomePage(props: IHomePageProps): JSX.Element {
  const { cities = [], sortOptions = [], offerItems = [] } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCard, setSelectedCard] = React.useState<IOfferCard | null>(null);

  const handleSelectCard = (obj: IOfferCard): void => {
    setSelectedCard(obj);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs items={cities} />
      <div className="cities">
        <div className="cities__places-container container">
          <OfferSection sortOptions={sortOptions} items={offerItems} handleSelectCard={handleSelectCard} />
          <div className="cities__right-section">
            <Map
              className="cities__map"
              city={offerItems[0].city}
              points={offerItems}
              selectedPointId={selectedCard && selectedCard.id}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
