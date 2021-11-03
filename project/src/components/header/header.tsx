import { Link } from 'react-router-dom';

import { AppRoutes } from '../../const';
import UserNavigation from '../user-navigation/user-nanigation';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoutes.Home}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <UserNavigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
