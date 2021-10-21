import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Dispatch } from 'redux';
import type { ConnectedProps } from 'react-redux';

import { AppRoutes, AuthorizationStatus, ERROR_404_MESSAGE, SortOfferOptions } from '../../const';
import { OfferItems } from '../../mocks/offers';
import Header from '../header/header';
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import PrivateRoute from '../private-route/private-route';
import ErrorPage from '../../pages/error-page/error-page';
import { ActionTypes } from '../../types/action';
import {
  fetchOffersAction,
  fetchOffersErrorAction,
  fetchOffersSuccessAction,
} from '../../redux/actions/offer';

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  fetchOffers() {
    dispatch(fetchOffersAction());
    try {
      dispatch(fetchOffersSuccessAction());
    } catch (e) {
      dispatch(fetchOffersErrorAction());
    }
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { fetchOffers } = props;

  React.useEffect(() => {
    fetchOffers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Header authorizationStatus={AuthorizationStatus.Auth} />
      <div className="page page--gray page--main">
        <Switch>
          <Route path={AppRoutes.Home} exact>
            <HomePage sortOptions={SortOfferOptions} />
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

export default connector(App);
