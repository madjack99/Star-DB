import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from '../sw-components';

import Row from '../row';
import ItemDetails, { Record } from '../item-details';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets,
    } = this.swapiService;

    return (
      <div>
        <SwapiServiceProvider value={this.swapiService}>
          <Header />
          <RandomPlanet />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={8} />
          {/* <PeoplePage /> */}

          {/* <Row left={personDetails} right={starshipDetails} /> */}

          <PersonList />
          <StarshipList />
          <PlanetList />
        </SwapiServiceProvider>
      </div>
    );
  }
}
