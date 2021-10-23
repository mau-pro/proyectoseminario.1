
import React, { Fragment } from "react";
import Admin from "./components/Admin";
import LoginForm from "./components/LoginForm";
import UiadminDocentes from "./components/UiadminDocentes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App () {
  return (
          <Router>
                <Switch>
                  
                   <Route path="/Admin">
                      <Admin />
                  </Route>
                  <Route path="/">
                    <LoginForm />
                  </Route>
                 </Switch>
         </Router>
      
 
          
  );
}

export default App;
