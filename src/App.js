import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {

  useEffect(() => {
      //will only run when the app component loads...
  },[])

  return (
    <Router>
    <div className="App">
        <Switch>
            <Route path="/login">
              <Login/>
          </Route>
            <Route path="/checkout">
                <Header />
                <Checkout/>
          </Route>
            <Route path="/">
                <Header />
                <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
