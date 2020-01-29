import React, { Component } from 'react';

import withData from '../hoc-helper/with-data';
import SwapiService from '../../services/swapi-service';

import './item-list.css';

const ItemList = ({ data, children, onItemSelected }) => {
  const renderItems = arr => {
    return arr.map(item => {
      const { id } = item;
      const label = children(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  const items = renderItems(data);

  return <ul className="item-list list-group">{items}</ul>;
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
