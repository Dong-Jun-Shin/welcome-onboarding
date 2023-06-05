import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { loadTheme } from "@fluentui/react";
import { ErrorLayout } from "./components/layouts/system/error";

import "./App.css";

loadTheme({
  defaultFontStyle: { fontFamily: "\"Nunito\", \"Noto Sans KR\", sans-serif", fontWeight: "400" },
  fonts: {
    xSmall: {
      fontSize: "0.69rem",
    },
    small: {
      fontSize: "0.75rem",
    },
    medium: {
      fontSize: "0.82rem",
    },
    large: {
      fontSize: "0.91rem",
    },
    xLarge: {
      fontSize: "1rem",
    },
  },
});

const HomeLayout = lazy(() => import("./components/layouts/home/index"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="suspense-loading">
            <div className="loading">
              <div className="loader" />
            </div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/404" component={ErrorLayout} />
          <Route path="/activity/security" component={HomeLayout}></Route>
          <Redirect exact from="/" to="/activity/security" />
          <Redirect from="*" to="/404" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
