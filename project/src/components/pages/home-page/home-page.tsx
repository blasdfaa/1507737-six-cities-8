import { PlaceCardType } from '../../app/app';
import PlaceCard from '../../place-card';
import SortPopup from '../../sort-popup';
import Tabs from '../../tabs';

type HomePageProps = {
  tabNames: string[];
  popupOptions: string[];
  offerItems: PlaceCardType[];
};

function HomePage({ tabNames, popupOptions, offerItems }: HomePageProps): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs tabNames={tabNames} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offerItems.length} places to stay in Amsterdam</b>
            <SortPopup popupOptions={popupOptions} />
            <div className="cities__places-list places__list tabs__content">
              {offerItems.map((offer, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <PlaceCard {...offer} key={`${offer.title}_${index}`} variant="offer" />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
