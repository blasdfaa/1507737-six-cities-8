import { Redirect, useLocation } from 'react-router';

import { AppRoutes, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../redux/user-process-data/selectors';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import { useAppSelector } from '../../hooks/use-app-selector';

type PrevLocationState = {
  from: {
    pathname: string;
  };
};

function LoginPage(): JSX.Element | null {
  const location = useLocation<PrevLocationState>();
  const prevRoute = location?.state?.from?.pathname;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
                  <a className="locations__item-link" href="#!" onClick={(e) => e.preventDefault()}>
                    <span>Amsterdam</span>
                  </a>
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
