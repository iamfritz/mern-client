import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const checkIfUserIsAuthenticated = () => {
  // get cookie from browser if logged in
  const token = cookies.get("TOKEN");
  
  return token ? true : false;
};

export const PrivateRoute = () => {
  const isAuth = checkIfUserIsAuthenticated();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

/* https://bobbyhadz.com/blog/component-is-not-a-route-component-react-router
export function PrivateRoute({ children }) {
  const isAuthenticated = false; // your logic here
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
<Route
  path="/demo/auth"
  element={
    <PrivateRoute>
      <AuthComponent />
    </PrivateRoute>
  }
/>
*/