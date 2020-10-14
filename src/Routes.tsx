import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DefaultLayout from "./presentation/components/layouts/DefaultLayout";

const Routes = () => {
    return (
  
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" render={() => <h1>Login</h1>} />
            <Route exact path="/register" render={() => <h1>Register</h1>} />
            <Route path="/" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </BrowserRouter>
      
    );
}

export default Routes;