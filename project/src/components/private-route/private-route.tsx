import type { ReactNode } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  children: ReactNode;
  authorizationStatus: string;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, ...restProps } = props;

  return (
    <Route {...restProps}>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        children
      ) : (
        <Redirect to={{ pathname: AppRoutes.Login, state: { from: props.location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
