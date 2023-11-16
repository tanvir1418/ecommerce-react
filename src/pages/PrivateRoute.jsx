import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// (...rest) is gathering all the other parameters to (...rest)
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to='/'></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRoute;
