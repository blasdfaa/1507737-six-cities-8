/* eslint-disable react/no-array-index-key */
import { IOfferFull } from '../../types/offer';
import Footer from '../../components/footer/footer';
import OfferList from '../../components/offer-list/offer-list';

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
                <OfferList items={offerItems} type="favorite" listClassName="favorites__places" />
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#!">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <OfferList items={offerItems} type="favorite" listClassName="favorites__places" />
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
