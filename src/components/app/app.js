import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
