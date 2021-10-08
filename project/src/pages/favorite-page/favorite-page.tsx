/* eslint-disable react/no-array-index-key */
import { IOfferFull } from '../../types/offer';
import Footer from '../../components/footer';
import OfferCard from '../../components/offer-card';

interface IFavoritePageProps {
  offerItems: IOfferFull[];
}

function FavoritePage(props: IFavoritePageProps): JSX.Element {
  const { offerItems } = props;
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
                  {offerItems.map((offer) => (
                    <OfferCard {...offer} key={offer.id} variant="favorite" />
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
                  {offerItems.map((offer) => (
                    <OfferCard {...offer} key={offer.id} variant="favorite" />
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
