import { Route, Redirect, RouteProps } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';

interface IPrivateRouteProps extends RouteProps {
  children: JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute(props: IPrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, ...rest } = props;

  return (
    <Route {...rest}>
      {authorizationStatus === AuthorizationStatus.Auth ? children : <Redirect to={AppRoutes.Login} />}
    </Route>
  );
}

export default PrivateRoute;
