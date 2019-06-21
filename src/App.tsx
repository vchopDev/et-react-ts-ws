import * as React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Catalog from "./template/catalog/Catalog";
import Homepage from "./template/homepage/Homepage";
import Detail from "./template/product/Detail";
import List from "./template/list/List";
import Header from "./components/header/Header";
import "./App.css"

const App: React.SFC = () => {
  return (
  <Router>
      <div>
        <Header />
        <Route exact={true} path="/homepage" component={Homepage} />
        <Route exact={true} path="/catalog" component={Catalog} />
        <Route exact={true} path="/product/:slug" component={Detail} />
        <Route exact={true} path="/list" component={List} />
      </div>
    </Router>
  );
}

export default App;
