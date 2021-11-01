import "./styles.css";

import { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "routes/Home";
import Launch from "routes/Launch";
import Rocket from "routes/Rocket";

import Header from "components/Header";

const App: FC = () => (
  <BrowserRouter>
    <Header />
    <div id="content">
      <Switch>
        <Route path="/rockets/:rocketId" component={Rocket} />
        <Route path="/launches/:launchId" component={Launch} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
