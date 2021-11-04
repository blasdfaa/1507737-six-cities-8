import { Route, Router, Switch } from 'react-router-dom';

import { AppRoutes, ERROR_404_MESSAGE } from '../../const';
import browserHistory from '../../services/browser-history';
import PrivateRoute from '../private-route/private-route';
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import HotelPage from '../../pages/hotel-page/hotel-page';
import ErrorPage from '../../pages/error-page/error-page';
import FavoriteHotelsPage from '../../pages/favorite-hotels-page/favorite-hotels-page';

function App(): JSX.Element {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={AppRoutes.Home} exact>
          <HomePage />
        </Route>

        <PrivateRoute path={AppRoutes.Favorites} exact>
          <FavoriteHotelsPage />
        </PrivateRoute>

        <Route path={AppRoutes.Hotel} exact>
          <HotelPage />
        </Route>

        <Route path={AppRoutes.Login} exact>
          <LoginPage />
        </Route>

        <Route exact>
          <ErrorPage code="404" text={ERROR_404_MESSAGE} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
