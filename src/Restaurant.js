import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const { name, votes, handleSelect, handleUnSelect } = this.props;

    return (
      <article className="Restaurant">
        <h3>{ name }</h3>
        <ul>
          { votes && map(votes, (vote, key) => <li key={key}>{vote}</li>)}
        </ul>
        <button onClick={handleSelect}>
          +1 for this restaurant
        </button>
        <button className="destructive" onClick={handleUnSelect}>
          -1 Nevermind
        </button>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleUnSelect: PropTypes.func
};

export default Restaurant;
