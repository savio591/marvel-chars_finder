import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

import { Home } from "./pages/Home";

const Routes = () => {
  const basepath = () => {
    // Condition for my site
    let basepath = "/";
    if (document.location.hostname === "savilexperiments.com.br") return "/marvel-chars_finder";
    return basepath;
  };

  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route path={basepath()} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
