import { Route, Redirect, RouteProps } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';

interface PrivateRouteProps extends RouteProps {
  children: JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, ...rest } = props;

  return (
    <Route {...rest}>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        children
      ) : (
        <Redirect to={AppRoutes.Login} />
      )}
    </Route>
  );
}

export default PrivateRoute;
