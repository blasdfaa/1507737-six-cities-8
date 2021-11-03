import React from 'react';
import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import {
  AppRoutes,
  AuthorizationStatus,
  EMAIL_VALID_REGEX,
  EMAIL_VALIDATION_MESSAGE,
  PASSWORD_VALID_REGEX,
  PASSWORD_VALIDATION_MESSAGE
} from '../../const';
import { loginAction } from '../../redux/user-process-data/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { AuthData } from '../../types/user';
import { RootState } from '../../types/state';

const isEmailValid = (email: string) => EMAIL_VALID_REGEX.test(String(email).toLowerCase());
const isPasswordValid = (password: string) => PASSWORD_VALID_REGEX.test(String(password)
  .toLowerCase());

const mapStateToProps = ({ USER_PROCESS }: RootState) => (
  {
    authorizationStatus: USER_PROCESS.authorizationStatus,
  }
);

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => (
  {
    onSubmitRequest(authData: AuthData) {
      dispatch(loginAction(authData));
    },
  }
);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginPage(props: PropsFromRedux): JSX.Element | null {
  const { authorizationStatus, onSubmitRequest } = props;

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

    onSubmitRequest({
      login: emailValue,
      password: passwordValue,
    });
  };

  // Чтобы страница не "мигала" у авторизованного пользователя, остановливает рендер при
  // неизвестном статусе
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return (
    <>
      {authorizationStatus === AuthorizationStatus.Auth && <Redirect to={AppRoutes.Home} />}
      {authorizationStatus !== AuthorizationStatus.Auth && (
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmitForm}
              >
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
      )}
    </>
  );
}

export default connector(LoginPage);
