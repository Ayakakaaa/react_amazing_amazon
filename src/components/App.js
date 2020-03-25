import React, { Component } from "react";

import ProductShowPage from "./ProductShowPage";
import { ProductIndexPage } from "./ProductIndexPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Session } from "../api/session";
import { NavBar } from "./NavBar";
import { ProductNewPage } from "./ProductNewPage";
import { WelcomePage } from "./WelcomePage";
import { SignInPage } from "./SignInPage";
import { User } from "../api/user";
import { AuthRoute } from "./AuthRoute.js";

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  getUser() {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        this.setState({ currentUser: null });
      } else {
        this.setState({ currentUser: data });
      }
    });
  }

  destroySession() {
    Session.destroy().then(this.setState({ currentUser: null }));
  }

  componentDidMount() {
    this.getUser();
  }

  render(){
    return (
      <BrowserRouter>
          <header>
            <NavBar currentUser={this.state.currentUser} onSignOut={this.destroySession} />
          </header>
          <div className="ui container segment">
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/products" component={ProductIndexPage} />
              <AuthRoute
              // The !! turns a statement from "truthy/falsy" to "true/false" respectively
              isAuthenticated={!!this.state.currentUser}
              component={ProductNewPage}
              path="/products/new"
              exact
              />
              <AuthRoute
                isAuthenticated={!!this.state.currentUser}
                component={ProductShowPage}
                path="/products/:id"
                exact
              />
              <Route
                path="/session/new"
                render={routeProps => (
                  <SignInPage {...routeProps} onSignIn={this.getUser} />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
};

export default App;
