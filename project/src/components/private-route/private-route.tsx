import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { RouteProps } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../redux/user-process-data/selectors';

type PrivateRouteProps = RouteProps & {
  children: ReactNode;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, ...restProps } = props;

  const location = useLocation();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route {...restProps}>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        children
      ) : (
        /* Для предотвращения сброса роута при обновлении приватной страницы, запоминаем предыдущий предыдущий роут и передаем в Location. При следующем обновлении приватной страницы делаем редирект на запомненный роут */
        <Redirect to={{ pathname: AppRoutes.Login, state: { from: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
