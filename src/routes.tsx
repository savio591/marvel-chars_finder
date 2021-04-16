import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

import { Home } from "./pages/Home";
import { Character } from "./pages/Character";

const Routes = () => {
  const basepath = () => {
    // Condition for my site
    let basepath = "/";
    if (document.location.hostname === "savilexperiments.com.br")
      return "/marvel-chars_finder";
    return basepath;
  };

  return (
    <BrowserRouter basename={basepath()}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character/:charId" component={Character} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
