import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@mfes/shared-library";

const DashboardPage = React.lazy(() => import("app_dashboard/DashboardPage"));

export default function Dashboard() {
  const { setAuthState } = useContext(AuthContext);
  const logoutHandler = () => {
    setAuthState({
      isAuthenticated: false,
      token: "",
      user: "",
      email: "",
      role: "",
      firstName: "",
      lastName: "",
    });
  };
  return (
    <React.Fragment>
      <Link to="/" onClick={logoutHandler}>
        Logout
      </Link>
      <React.Suspense fallback="Loading">
        <DashboardPage />
      </React.Suspense>
    </React.Fragment>
  );
}
