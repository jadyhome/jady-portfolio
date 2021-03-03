import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorksPage from "../pages/WorksPage";
import IllustrationsPage from "../pages/IllustrationsPage";

const Router = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setPageLoading(false);
  }, []);

  return (
    <main>
      {pageLoading ? (
        <h1 className="pageloading">PAGE IS LOADING...</h1>
      ) : (
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route path="/works" component={() => <WorksPage />} />
          <Route
            path="/illustrations"
            component={() => <IllustrationsPage />}
          />
        </Switch>
      )}
    </main>
  );
};

export default Router;
