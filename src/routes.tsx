import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";

const Routes = () => {
  return (
      <BrowserRouter forceRefresh={true} >
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
  );
};

export default Routes;
