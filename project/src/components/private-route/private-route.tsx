import { Redirect, Route, useLocation } from 'react-router-dom';
import type { RouteProps } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../redux/user-process-data/selectors';
import { useAppSelector } from '../../hooks/use-app-selector';

type PrivateRouteProps = RouteProps & {
  children: React.ReactNode;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, ...restProps } = props;

  const location = useLocation();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <Route {...restProps}>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        children
      ) : (
        <Redirect to={{ pathname: AppRoutes.Login, state: { from: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
