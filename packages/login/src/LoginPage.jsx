import React, { useState } from 'react';
import { 
  Button, 
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

import logo from "./assets/img/logo.png";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit({userName, password});
    setUserName('');
    setPassword('');
  }

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="Logo"/>
        <Typography component="h1" variant="h5">
          {t("login:title")}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t("login:emailAddress")}
            name="email"
            autoComplete="email"
            autoFocus
            onChange={userNameHandler}
            value={userName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("login:password")}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={passwordHandler}
            value={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("login:rememberMe")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t("login:signIn")}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("login:forgotPassword")}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {t("login:signup")}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}