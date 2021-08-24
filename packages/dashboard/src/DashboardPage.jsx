import React from "react";
import { Container, Grid, styled } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Orders from "./Orders"

const TodoMFE = React.lazy(() => import("app_todo/TodoMFE"));
const AboutPage = React.lazy(() => import("app_about/AboutPage"));

const GridItem = styled(Grid)({
  border: '1px solid red'
})

const useStyles = makeStyles({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  orders: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
});

export default function DashboardPage() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <h1>Dashboard !</h1>
      <p>This Dashboard page shows how multiple Micro frontends can be loaded in the same page using Module Federation. Subrouting within them works without affecting the URL or the other content in the page.</p>
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <GridItem item xs={4}>
            <div className={classes.orders}>
              <Orders/>
            </div>
          </GridItem>
          <GridItem item xs={4}>
            <React.Suspense fallback="Loading">
              <TodoMFE/>
            </React.Suspense>  
          </GridItem>
          <GridItem item xs={4}>
            <React.Suspense fallback="Loading">
              <AboutPage/>
            </React.Suspense>   
          </GridItem>                
        </Grid>
      </Container>
    </main>
  );
}
