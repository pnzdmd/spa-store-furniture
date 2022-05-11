import React, { Component } from 'react';
import Item from '../Item/Item';

class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      </main>
    );
  }
}

export default Items;
