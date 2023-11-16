import { Route, Redirect } from 'react-router-dom';
// will remove later
import { useUserContext } from '../context/user_context';

// (...rest) is gathering all the other parameters to (...rest)
const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/'></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRoute;
