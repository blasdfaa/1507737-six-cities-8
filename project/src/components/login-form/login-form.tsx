import React from 'react';

import { EMAIL_VALIDATION_MESSAGE, PASSWORD_VALIDATION_MESSAGE } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loginAction } from '../../redux/user-process-data/api-actions';
import { isEmailValid, isPasswordValid } from '../../utils/validate-login-form';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

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

  return (
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
  );
}

export default LoginForm;
