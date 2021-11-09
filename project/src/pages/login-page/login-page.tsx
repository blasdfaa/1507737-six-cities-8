import React from 'react';
import { Redirect, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus, HotelCategories } from '../../const';
import { getAuthorizationStatus } from '../../redux/user-process-data/selectors';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import { useAppSelector } from '../../hooks/use-app-selector';
import { HotelCategory } from '../../types/hotel';
import { setHotelsCategoryAction } from '../../redux/all-hotels-data/all-hotels-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getRandomInteger } from '../../utils/get-random-integer';

type PrevLocationState = {
  from: {
    pathname: string;
  };
};

function LoginPage(): JSX.Element | null {
  const [customCategory, setCustomCategory] = React.useState<null | HotelCategory>(null);

  const location = useLocation<PrevLocationState>();

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const prevRoute = location?.state?.from?.pathname;

  React.useEffect(() => {
    setCustomCategory(HotelCategories[getRandomInteger(0, HotelCategories.length - 1)]);
  }, []);

  const handleSelectCategory = () => {
    if (customCategory) {
      dispatch(setHotelsCategoryAction(customCategory));
    }
  };

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return (
    <>
      {authorizationStatus === AuthorizationStatus.Auth && <Redirect to={prevRoute || AppRoutes.Home} />}
      {authorizationStatus !== AuthorizationStatus.Auth && (
        <div className="page page--gray page--login">
          <Header />
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <LoginForm />
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={AppRoutes.Home} onClick={handleSelectCategory}>
                    <span>{customCategory}</span>
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default LoginPage;
