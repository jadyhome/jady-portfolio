import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WildflowerSeries from "../pages/WildflowerSeries";
import ColorsProject from "../pages/ColorsProject";
import FlowerSeries from "../pages/FlowerSeries";

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
          <Route
            path="/wildflowerseries"
            component={() => <WildflowerSeries />}
          />
          <Route path="/colorsproject" component={() => <ColorsProject />} />
          <Route path="/flowerseries" component={() => <FlowerSeries />} />
        </Switch>
      )}
    </main>
  );
};

export default Router;
