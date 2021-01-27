import React, { Suspense } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { PulseSpinner } from "react-spinners-kit";

import "./App.scss";
import Layout from "./HOC/Layout";

//lazy loading componetns
const SingleDice = React.lazy(() => import("./containers/SignleDice"));
const CustomDice = React.lazy(() => import("./containers/CustomDice"));
const MultipleDice = React.lazy(() => import("./containers/MultipleDice"));

function App(props) {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route
            path="/single-dice"
            render={() => (
              <Suspense
                fallback={
                  <PulseSpinner color="white" size={30} loading={true} />
                }
              >
                <SingleDice />
              </Suspense>
            )}
          />
          <Route
            path="/custom-dice"
            render={() => (
              <Suspense
                fallback={
                  <PulseSpinner color="white" size={30} loading={true} />
                }
              >
                <CustomDice />
              </Suspense>
            )}
          />
          <Route
            path="/multiple-dice"
            render={() => (
              <Suspense
                fallback={
                  <PulseSpinner color="white" size={30} loading={true} />
                }
              >
                <MultipleDice />
              </Suspense>
            )}
          />
          <Route
            path="/" exact
            render={() => (
              <Suspense
                fallback={
                  <PulseSpinner color="white" size={30} loading={true} />
                }
              >
                <SingleDice />
              </Suspense>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
