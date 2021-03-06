import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import { database } from './firebase';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key){
    const currentUser = this.props.user;
    database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .set(currentUser.displayName);
  }

  handleUnSelect(key){
    const currentUser = this.props.user;
    database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .remove();
  }

  render () {
    const { restaurants } = this.props;
    return (
      <section className="Restaurants">
        { 
          map(restaurants, (restaurant, key) => {
            return <Restaurant 
                      key={key} 
                      {...restaurant} 
                      handleSelect={() => this.handleSelect(key)}
                      handleUnSelect={() => this.handleUnSelect(key)}
                    />;
          })
        }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
