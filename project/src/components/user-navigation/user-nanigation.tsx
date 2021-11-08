import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { logoutAction } from '../../redux/user-process-data/api-actions';
import { getAuthorizationStatus, getUserAuthInfo } from '../../redux/user-process-data/selectors';

function UserNavigation(): JSX.Element | null {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userInfo = useAppSelector(getUserAuthInfo);

  const handleLogoutLink = (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch(logoutAction());
  };

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
                <div
                  className="header__avatar-wrapper user__avatar-wrapper"
                  style={{
                    backgroundImage: `url(${userInfo && userInfo.avatarUrl})`,
                    borderRadius: '50%',
                  }}
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
  );
}

export default React.memo(UserNavigation);
