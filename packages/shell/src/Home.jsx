import React, { useContext } from "react";
import { CssBaseline, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { AuthContext } from "@mfes/shared-library";
import { useTranslation } from "react-i18next";

const LoginMFE = React.lazy(() => import("app_login/LoginMFE"));

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  header: {
    textAlign: "center",
    marginTop: "2rem"
  },
}));

export default function SignInSide() {
  const {setAuthState} = useContext(AuthContext);
  const {t} = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = ({userName, password}) => {
    if (userName.includes('@mfe.com') && password.length >= 3) {
      setAuthState((previousState) => ({
        ...previousState,
        isAuthenticated: true,
        token: Math.random().toString(36).substr(2, 10),
        user: userName.split('@')[0],
        email: userName,
        role: 'admin',
        firstName: 'FirstName',
        lastName: 'LastName'
      }));
      history.push("/dashboard");
    } else {
      setAuthState({
        isAuthenticated: false,
        token: '',
        user: '',
        email: '',
        role: '',
        firstName: '',
        lastName: ''
      });      
      alert(t("home:login.error"));
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <h2 className={classes.header}>{t("home:welcome")}</h2>
        <React.Suspense fallback="Loading">
          <LoginMFE onSubmit={onSubmit} />
        </React.Suspense>
      </Grid>
    </Grid>
  );
}
