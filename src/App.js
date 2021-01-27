import React, { Suspense } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import "./App.scss";
import Layout from "./HOC/Layout";
import Spinner from "./components/UI/Spinner/Spinner";

//lazy loading componetns
const SingleDice = React.lazy(() => import("./containers/SignleDice"));
const CustomDice = React.lazy(() => import("./containers/CustomDice"));
const MultipleDice = React.lazy(() => import("./containers/MultipleDice"));
const UserChoice = React.lazy(() => import("./components/UserChoice/UserChoice"));

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
                  <Spinner />
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
                  <Spinner />
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
                  <Spinner/>
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
                  <Spinner />
                }
              >
                <UserChoice />
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
