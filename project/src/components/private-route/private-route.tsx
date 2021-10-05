import { Route, Redirect, RouteProps } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';

interface IPrivateRoute extends RouteProps {
  children: JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute(props: IPrivateRoute): JSX.Element {
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
