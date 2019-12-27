import React from 'react';
import { Route, Redirect } from 'react-router';
import useStores from '~helpers/useStores';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  redirectTo: string;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = props => {
  const { component: Component, redirectTo, path, exact } = props;
  const { authStore } = useStores();

  return (
    <Route
      path={path}
      exact={exact}
      render={(props: any) =>
        authStore.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;
