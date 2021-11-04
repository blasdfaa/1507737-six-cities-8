import type { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { AppRoutes, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../redux/user-process-data/selectors';

type PrivateRouteProps = RouteProps & {
  children: ReactNode;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, ...restProps } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

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
