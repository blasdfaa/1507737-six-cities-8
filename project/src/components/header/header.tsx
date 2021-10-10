import { Link } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';

interface IHeaderProps {
  authorizationStatus: string;
}

function header(props: IHeaderProps): JSX.Element {
  const { authorizationStatus = 'NO_AUTH' } = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoutes.Home}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {AuthorizationStatus.Auth === authorizationStatus ? (
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#!">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default header;
