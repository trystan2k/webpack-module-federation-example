
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { AuthProvider } from "@mfes/shared-library";

import { AuthRoute } from "./AuthRoute";
import Home from "./Home";
import Dashboard from "./Dashboard";

import '../utils/i18n';

export function App() {

  const lngs = {
    "en-US": { nativeName: "EN" },
    "es-ES": { nativeName: "ES" },
    "pt-BR": { nativeName: "PT" },
  };  
  const { i18n } = useTranslation();

  return (
    <AuthProvider>
      <div style={{position: "absolute", right: "0"}}>
        {Object.keys(lngs).map((lng) => (
          <Button
            color="primary"
            key={lng}
            style={{
              textDecoration: i18n.language === lng ? "underline" : "none",
              fontWeight: i18n.language === lng ? "bold" : "normal",
            }}
            onClick={() => {
              i18n.changeLanguage(lng);
            }}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </div>      
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <React.Suspense fallback="Loading">
              <Home/>        
            </React.Suspense>
          </Route>
          <AuthRoute path='/dashboard'>
            <Dashboard/>
          </AuthRoute>             
        </Switch>
      </BrowserRouter>
    </AuthProvider> 
  );
}
