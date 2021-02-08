import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

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
          <Route />
        </Switch>
      )}
    </main>
  );
};

export default Router;
