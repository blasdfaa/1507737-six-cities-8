import { IOfferFull } from '../../types/offer';
import Tabs from '../../components/tabs';
import OfferList from '../../components/offer-list';

interface IHomePageProps {
  cities: string[];
  sortOptions: string[];
  offerItems: IOfferFull[];
}

function HomePage(props: IHomePageProps): JSX.Element {
  const { cities = [], sortOptions = [], offerItems = [] } = props;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs tabNames={cities} />
      <div className="cities">
        <div className="cities__places-container container">
          <OfferList sortOptions={sortOptions} items={offerItems} />
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
