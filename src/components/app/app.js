import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
} from '../pages';
import StarshipDetails from '../sw-components/starship-details';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <Header />
            <RandomPlanet />

            <Route path="/" render={() => <h2>Welcome to star DB</h2>} exact />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" exact component={StarshipsPage} />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails itemId={id} />;
              }}
            />
            <Route
              path="/login"
              render={() => {
                return (
                  <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                );
              }}
            />
            <Route
              path="/secret"
              render={() => {
                return <SecretPage isLoggedIn={isLoggedIn} />;
              }}
            />
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
