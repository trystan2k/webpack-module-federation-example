import React from 'react';
import { 
    CssBaseline,
    Link,
    Paper,
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const LoginPage = React.lazy(() => import("app_login/LoginPage"));

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = () => {
    history.push("/dashboard");
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <React.Suspense fallback="Loading">
            <LoginPage onSubmit={onSubmit}/>
        </React.Suspense>
      </Grid>
    </Grid>
  );
}