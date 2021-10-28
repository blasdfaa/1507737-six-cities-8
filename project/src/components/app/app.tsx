import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import type { ConnectedProps } from 'react-redux';

import { AppRoutes, ERROR_404_MESSAGE } from '../../const';
import { OfferItems } from '../../mocks/offers';
import Header from '../header/header';
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import PrivateRoute from '../private-route/private-route';
import ErrorPage from '../../pages/error-page/error-page';
import { GlobalState } from '../../types/state';
import browserHistory from '../../services/browser-history';

const mapStateToProps = ({ user }: GlobalState) => ({
  authorizationStatus: user.authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { authorizationStatus = 'NO_AUTH' } = props;

  return (
    <Router history={browserHistory}>
      <Header />
      <div className="page page--gray page--main">
        <Switch>
          <Route path={AppRoutes.Home} exact>
            <HomePage />
          </Route>

          <PrivateRoute path={AppRoutes.Favorites} authorizationStatus={authorizationStatus} exact>
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
    </Router>
  );
}

export default connector(App);
