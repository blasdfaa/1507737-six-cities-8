/* eslint-disable react/no-array-index-key */
import { PlaceOfferType } from '../../../types/place';
import Footer from '../../footer';
import PlaceCard from '../../place-card';

type FavoritePageProps = {
  offerItems: PlaceOfferType[];
};

function FavoritePage({ offerItems }: FavoritePageProps): JSX.Element {
  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#!">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offerItems.map((offer, index) => (
                    <PlaceCard {...offer} key={`${offer.title}_${index}`} variant="favorite" />
                  ))}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#!">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offerItems.map((offer, index) => (
                    <PlaceCard {...offer} key={`${offer.title}_${index}`} variant="favorite" />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FavoritePage;
