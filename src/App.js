import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <News key="general" category="general" />
          </Route>
          <Route path="/science">
            <News key="science" category="science" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" category="technology" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
