import { Route, Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoutes, ERROR_404_MESSAGE } from '../../const';
import Header from '../header/header';
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import HotelPage from '../../pages/hotel-page/hotel-page';
import PrivateRoute from '../private-route/private-route';
import ErrorPage from '../../pages/error-page/error-page';
import browserHistory from '../../services/browser-history';
import { getAuthorizationStatus } from '../../redux/user-process-data/selectors';
import FavoriteHotelsPage from '../../pages/favorite-hotels-page/favorite-hotels-page';

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Router history={browserHistory}>
      <Header />
      <div className="page page--gray page--main">
        <Switch>
          <Route path={AppRoutes.Home} exact>
            <HomePage />
          </Route>

          <PrivateRoute path={AppRoutes.Favorites} authorizationStatus={authorizationStatus} exact>
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
      </div>
    </Router>
  );
}

export default App;
