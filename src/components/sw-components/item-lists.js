import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc-helper/with-data';
import { withSwapiService } from '../hoc-helper';

const withChildFunction = (WrappedComponent, fn) => {
  return props => {
    return <WrappedComponent {...props}>{fn}</WrappedComponent>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople,
  };
};
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets,
  };
};
const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(withChildFunction(ItemList, renderName), mapPersonMethodsToProps)
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(withChildFunction(ItemList, renderName))
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(withChildFunction(ItemList, renderModelAndName))
);

export { PersonList, PlanetList, StarshipList };
