import { Redirect, Route, RouteProps } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';

interface IPrivateRouteProps extends RouteProps {
  children: JSX.Element | JSX.Element[];
  authorizationStatus: string;
}

function PrivateRoute(props: IPrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, ...restProps } = props;

  return (
    <Route {...restProps}>
      {authorizationStatus === AuthorizationStatus.Auth ? children : <Redirect to={AppRoutes.Login} />}
    </Route>
  );
}

export default PrivateRoute;
