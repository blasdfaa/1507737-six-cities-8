import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';
import { GlobalStateType } from '../../types/state';
import { UserInfoType } from '../../types/user';
import { ThunkAppDispatch } from '../../types/action';
import { logoutAction } from '../../redux/actions/api';

const mapStateToProps = ({ user }: GlobalStateType) => ({
  authorizationStatus: user.authorizationStatus,
  userInfo: user.authInfo,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogoutLink() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector> & {
  authorizationStatus: string;
  userInfo: UserInfoType | null;
};

function Header(props: HeaderProps): JSX.Element {
  const { authorizationStatus = 'NO_AUTH', userInfo, onLogoutLink } = props;

  const handleLogoutLink = (e: React.MouseEvent) => {
    e.preventDefault();

    onLogoutLink();
  };

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
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        style={{ backgroundImage: `url(${userInfo && userInfo.avatarUrl})` }}
                      />
                      <span className="header__user-name user__name">{userInfo && userInfo.email}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#!" onClick={handleLogoutLink}>
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

export default connector(Header);
