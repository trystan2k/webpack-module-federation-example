import React, { useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import { AuthContext } from "@mfes/shared-library";

export const AuthRoute = (props) => {
  const { authState } = useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    if (!authState.isAuthenticated) {
      history.push("/");
    }
  }, [props?.location?.pathname]);

  return <Route {...props} />;
};
