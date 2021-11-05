import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';

import {
  AppRoutes,
  AuthorizationStatus,
  EMAIL_VALIDATION_MESSAGE,
  PASSWORD_VALIDATION_MESSAGE
} from '../../const';
import { isEmailValid, isPasswordValid } from '../../utils/validate-login-form';
import { getAuthorizationStatus } from '../../redux/user-process-data/selectors';
import { loginAction } from '../../redux/user-process-data/api-actions';
import Header from '../../components/header/header';

type PrevLocationState = {
  from: {
    pathname: string;
  };
};

function LoginPage(): JSX.Element | null {
  const dispatch = useDispatch();
  const location = useLocation<PrevLocationState>();
  const prevRoute = location?.state?.from?.pathname;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const [emailValue, setEmailValue] = React.useState<string>('');
  const [passwordValue, setPasswordValue] = React.useState<string>('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e?.currentTarget?.value;
    const emailInput = e?.target;

    if (!isEmailValid(email)) {
      emailInput.setCustomValidity(EMAIL_VALIDATION_MESSAGE);
    } else {
      emailInput.setCustomValidity('');
    }

    emailInput.reportValidity();
    setEmailValue(email);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e?.currentTarget?.value;
    const passwordInput = e?.target;

    if (!isPasswordValid(password)) {
      passwordInput.setCustomValidity(PASSWORD_VALIDATION_MESSAGE);
    } else {
      passwordInput.setCustomValidity('');
    }

    passwordInput.reportValidity();
    setPasswordValue(password);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const UserLoginData = {
      login: emailValue,
      password: passwordValue,
    };

    dispatch(loginAction(UserLoginData));
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
                <form className="login__form form" action="#" method="post" onSubmit={handleSubmitForm}>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input
                      className="login__input form__input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={emailValue}
                      onChange={handleChangeEmail}
                      required
                    />
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input
                      className="login__input form__input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={passwordValue}
                      onChange={handleChangePassword}
                      required
                    />
                  </div>
                  <button className="login__submit form__submit button" type="submit">
                    Sign in
                  </button>
                </form>
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#!">
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
