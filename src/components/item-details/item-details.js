import React, { Component } from 'react';

import Spinner from '../spinner';

import SwapiService from '../../services/swapi-service';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    itemLoaded: false,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        itemLoaded: false,
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({
        item,
        itemLoaded: true,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { item, itemLoaded, image } = this.state;

    if (!item) {
      return <span>Please chose a character from the list</span>;
    }

    if (!itemLoaded) {
      return <Spinner />;
    }

    const { name, gender, birthYear, eyeColor } = this.state.item;

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="item" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export { Record };
