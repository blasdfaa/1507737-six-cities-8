import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  AppRoutes,
  AuthorizationStatus,
  ERROR_404_MESSAGE,
  OfferCities,
  SortOfferOptions
} from '../../const';
import Header from '../header';
import HomePage from '../../pages/home-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritePage from '../../pages/favorite-page';
import PrivateRoute from '../private-route';
import ErrorPage from '../../pages/error-page';
import { OfferItems } from '../../mocks/offers';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header authorizationStatus={AuthorizationStatus.Auth} />
      <div className="page page--gray page--main">
        <Switch>
          <Route path={AppRoutes.Home} exact>
            <HomePage cities={OfferCities} sortOptions={SortOfferOptions} offerItems={OfferItems} />
          </Route>

          <PrivateRoute path={AppRoutes.Favorites} authorizationStatus={AuthorizationStatus.Auth} exact>
            <FavoritePage offerItems={OfferItems} />
          </PrivateRoute>

          <Route path={AppRoutes.Offer} exact>
            <OfferPage />
          </Route>

          <Route path={AppRoutes.Login} exact>
            <LoginPage />
          </Route>

          <Route exact>
            <ErrorPage code="404" text={ERROR_404_MESSAGE} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
