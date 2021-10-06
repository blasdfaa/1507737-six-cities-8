import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { IOffer } from '../../types/offer';
import { IOfferComment } from '../../types/comment';
import Header from '../header';
import HomePage from '../../pages/home-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import { AppRoutes, AuthorizationStatus } from '../../const';
import FavoritePage from '../../pages/favorite-page';
import PrivateRoute from '../private-route';

const TabNames: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const PopupOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

const OfferItems: IOffer[] = [
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/apartment-01.jpg',
    isFavorite: false,
    price: 12,
    rating: 1.2,
    type: 'Premium',
    category: 'Apartment',
  },
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/apartment-02.jpg',
    isFavorite: true,
    price: 123510,
    rating: 3,
    type: 'Premium',
    category: 'Apartment',
  },
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/apartment-03.jpg',
    isFavorite: true,
    price: 120315,
    rating: 5,
    type: 'Premium',
    category: 'Private room',
  },
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/room.jpg',
    isFavorite: false,
    price: 1210,
    rating: 2.3,
    type: 'Premium',
    category: 'Apartment',
  },
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/room.jpg',
    isFavorite: false,
    price: 1320,
    rating: 3.4,
    type: 'Premium',
    category: 'Private room',
  },
];

const CommetsItems: IOfferComment[] = [
  {
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: './img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Max1',
    },
  },
  {
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 3,
    rating: 4,
    user: {
      avatarUrl: './img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max2',
    },
  },
  {
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: './img/avatar.svg',
      id: 2,
      isPro: false,
      name: 'Max3',
    },
  },
];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="page page--gray page--main">
        <Header />
        <Switch>
          <Route path={AppRoutes.Home} exact>
            <HomePage tabNames={TabNames} popupOptions={PopupOptions} offerItems={OfferItems} />
          </Route>
          <PrivateRoute
            path={AppRoutes.Favorites}
            authorizationStatus={AuthorizationStatus.NoAuth}
            exact
          >
            <FavoritePage offerItems={OfferItems} />
          </PrivateRoute>
          <Route path={AppRoutes.Offer} exact>
            <OfferPage offerItems={OfferItems} commentsItems={CommetsItems} />
          </Route>
          <Route path={AppRoutes.Login} exact>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
