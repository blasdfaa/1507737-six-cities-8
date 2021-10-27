import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import type { ConnectedProps } from 'react-redux';

import {
  AppRoutes,
  AuthorizationStatus,
  EMAIL_VALIDATION_MESSAGE,
  EMAIL_VALID_REGEX,
  PASSWORD_VALIDATION_MESSAGE,
  PASSWORD_VALID_REGEX
} from '../../const';
import { loginAction } from '../../redux/actions/api';
import { ThunkAppDispatch } from '../../types/action';
import { AuthDataType } from '../../types/user';
import { GlobalStateType } from '../../types/state';

const isEmailValid = (email: string) => EMAIL_VALID_REGEX.test(String(email).toLowerCase());
const isPasswordValid = (password: string) => PASSWORD_VALID_REGEX.test(String(password).toLowerCase());

const mapStateToProps = ({ user }: GlobalStateType) => ({
  authorizationStatus: user.authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmitRequest(authData: AuthDataType) {
    dispatch(loginAction(authData));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginPage(props: PropsFromRedux): JSX.Element {
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

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Redirect to={AppRoutes.Home} />;
  }

  return (
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
  );
}

export default connector(LoginPage);
